import { useEffect, useReducer } from "react";
import { getObjectCached, getProductDetails, setObjectCached } from "services";

const TTL = 1000 * 3600;

const initialState = {
  status: "idle",
  error: null,
  productDetails: {},
};

const parseDetails = (details) => {
  const UNKNOWN_TEXT = "Check in store";
  for (const detail in details) {
    if (details[detail] === "") details[detail] = UNKNOWN_TEXT;
  }
  return details;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...initialState, status: "loading" };
    case "FETCHED": {
      const parsedDetails = parseDetails(action.payload);
      return {
        ...initialState,
        status: "fetched",
        productDetails: parsedDetails,
      };
    }
    case "FETCH_ERROR":
      return { ...initialState, status: "error", error: action.payload };
    case "IDLE":
      return { ...initialState };
    default:
      return state;
  }
};

export default function useFetchProductDetails({ id }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    dispatch({ type: "LOADING" });

    let cachedProductDetails = getObjectCached(`cachedProductDetails-${id}`);

    if (!cachedProductDetails) {
      const productDetails = await getProductDetails(id);
      setObjectCached(`cachedProductDetails-${id}`, productDetails, TTL);
      cachedProductDetails = productDetails;
    }

    if (cachedProductDetails.code === 0)
      dispatch({ type: "FETCH_ERROR", payload: cachedProductDetails.message });
    else dispatch({ type: "FETCHED", payload: cachedProductDetails });
  }, [id]);

  return state;
}
