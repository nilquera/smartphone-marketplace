import "./styles.css";

import { useParams } from "react-router-dom";
import { useFetchProductDetails } from "hooks";
import {
  ProductActions,
  ProductDescription,
  ProductImage,
  Spinner,
} from "components";

export default function ProductDetails() {
  const { id } = useParams();
  const { status, error, productDetails } = useFetchProductDetails({ id });
  const { imgUrl, model, brand } = productDetails;
  const title = `${brand} ${model}`;

  return (
    <div className="productDetails-container">
      {status === "loading" && <Spinner />}
      {status === "error" && <h1>{error}</h1>}
      {status === "fetched" && (
        <>
          <div className="productDetails-title">{title}</div>
          <div className="productDetails-image">
            <ProductImage src={imgUrl} alt={model} />
          </div>
          <div className="productDetails-side">
            <div className="productDetails-info">
              <ProductDescription productDetails={productDetails} />
            </div>
            <div className="productDetails-actions">
              <ProductActions productDetails={productDetails} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
