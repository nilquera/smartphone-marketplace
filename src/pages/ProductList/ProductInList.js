import { Link } from "react-router-dom";

export default function ProductInList({ product }) {
  const { brand, model, imgUrl, price, id } = product;
  return (
    <div className="product-grid-item">
      <Link to={`/details/${id}`}>
        <div className="image-container">
          <img src={imgUrl} />
        </div>
      </Link>
      <div className="product-grid-item-info">
        <p>
          <b>{price !== "" ? `${price} €` : "Check in store"}</b>
        </p>
        <Link to={`/details/${id}`}>
          <p>{model}</p>
        </Link>
        <p>{brand}</p>
      </div>
    </div>
  );
}
