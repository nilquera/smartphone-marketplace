import { API_URL } from "./settings";

export default function getProductDetails(id) {
  const url = `${API_URL}/product/${id}`;
  return fetch(url).then((res) => res.json());
}
