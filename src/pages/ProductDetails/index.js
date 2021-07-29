import { useParams } from "react-router-dom";
import { useFetchProductDetails } from "hooks";
export default function ProductDetails() {
  const { id } = useParams();
  const { status, error, ProductDetails } = useFetchProductDetails({ id });

  console.log(status);

  return (
    <div className="productDetails-container">
      {status === "loading" && <h1>Loading</h1>}
      {status === "error" && <h1>{error}</h1>}
      {status === "fetched" && (
        <>
          <div>imatge</div>
          <div>{id}</div>
        </>
      )}
    </div>
  );
}
