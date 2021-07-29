import { API_URL } from "./settings";

export default function AddProductToCart(id, colorCode, storageCode) {
  const url = `${API_URL}/cart`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, colorCode, storageCode }),
  };
  return fetch(url, options).then((res) => res.json());
}
