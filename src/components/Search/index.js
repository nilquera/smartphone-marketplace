import "./styles.css";

export default function Search({ search, handleSearch }) {
  return (
    <input
      className="searchInput"
      placeholder="filter by brand or model"
      value={search}
      onChange={handleSearch}
      type="text"
    />
  );
}
