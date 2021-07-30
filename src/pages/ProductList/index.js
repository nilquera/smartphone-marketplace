import { useEffect, useState } from "react";
import { useFetchProducts } from "hooks";
import "./styles.css";
import ProductInList from "./ProductInList";
import { Search, Spinner } from "components";

const ITEMS_PAGE = 9;

export default function ProductList() {
  const [search, setSearch] = useState("");
  const { loading, productList } = useFetchProducts();
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(12);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
    if (currentPage !== 0) setCurrentPage(0);
  };

  useEffect(() => {
    setPages((filteredProductList.length + ITEMS_PAGE - 1) / ITEMS_PAGE);
  }, [filteredProductList]);

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

  const increaseCurrentPage = () => {
    if (currentPage !== pages - 1) setCurrentPage(currentPage + 1);
  };

  const decreaseCurrentPage = () => {
    if (currentPage !== 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="search-container">
        <Search value={search} handleSearch={handleSearch} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="pagination">
            <button className="pagination-button" onClick={decreaseCurrentPage}>
              &laquo;
            </button>
            <button className="pagination-button" onClick={increaseCurrentPage}>
              &raquo;
            </button>
          </div>
          <div className="product-grid">
            {filteredProductList
              .slice(
                currentPage * ITEMS_PAGE,
                currentPage * ITEMS_PAGE +
                  (currentPage !== pages - 1
                    ? ITEMS_PAGE
                    : filteredProductList.length % ITEMS_PAGE)
              )
              .map((product, key) => {
                return <ProductInList key={key} product={product} />;
              })}
          </div>
        </>
      )}
    </div>
  );
}
