import { API_URL } from "./settings";

export default function getProducts() {
  const url = `${API_URL}/product`;
  return fetch(url).then((res) => res.json());
}
