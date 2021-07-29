import { useEffect, useReducer, useState } from "react";
import { getProductDetails } from "services";

const initialState = {
  status: "idle",
  error: null,
  productDetails: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...initialState, status: "loading" };
    case "FETCHED":
      return { ...initialState, status: "fetched", data: action.payload };
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

    const productDetails = await getProductDetails(id);

    if (productDetails.code === 0)
      dispatch({ type: "FETCH_ERROR", payload: "Error mio" });
    else dispatch({ type: "FETCHED", payload: productDetails });
  }, [id]);

  return state;
}
