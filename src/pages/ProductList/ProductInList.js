import { Link } from "react-router-dom";

export default function ProductInList({ product }) {
  const { brand, model, imgUrl, price, id } = product;
  return (
    <div className="product-grid-item">
      <Link to={`/details/${id}`}>
        <img src={imgUrl} />
      </Link>
      <div className="product-grid-item-info">
        <Link to={`/details/${id}`}>
          <p>{model}</p>
        </Link>
        <p>{brand}</p>
        <p>{price !== "" ? `${price} €` : "Check in store"}</p>
      </div>
    </div>
  );
}
