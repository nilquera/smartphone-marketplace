import { useEffect, useState } from "react";
import { useFetchProducts } from "hooks";
import "./styles.css";
import ProductInList from "./ProductInList";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const { loading, productList } = useFetchProducts();
  const [filteredProductList, setFilteredProductList] = useState([]);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

  useEffect(() => {
    if (search === "") setFilteredProductList(productList);
    else {
      setFilteredProductList(
        productList.filter(({ model, brand }) => {
          return model === search || brand === search;
        })
      );
    }
  }, [search]);

  return (
    <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
      <input
        placeholder="filter by brand or model"
        value={search}
        onChange={handleSearch}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="product-grid">
          {filteredProductList.map((product, key) => {
            return <ProductInList key={key} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}
