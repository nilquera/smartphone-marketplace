import { useState } from "react";
import { useFetchProducts } from "hooks";
import "./styles.css";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const { loading, productList } = useFetchProducts();

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div>
      <input
        placeholder="search smartphone"
        value={search}
        onChange={handleSearch}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="product-grid">
          {productList.map(({ brand, model, imgUrl, price, id }, key) => {
            return (
              <ProductInList
                key={key}
                brand={brand}
                model={model}
                imgUrl={imgUrl}
                price={price}
                id={id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function ProductInList({ brand, model, imgUrl, price, id }) {
  return (
    <div className="product-grid-item">
      <Link to={`/details/${id}`}>
        <img src={imgUrl} />
      </Link>
      <Link to={`/details/${id}`}>
        <p>{model}</p>
      </Link>
      <p>{brand}</p>
      <p>{price}</p>
    </div>
  );
}
