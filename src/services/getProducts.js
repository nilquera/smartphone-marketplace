import { API_URL } from "./settings";

export default function getProducts() {
  return fetch(API_URL).then((res) => res.json());
}
