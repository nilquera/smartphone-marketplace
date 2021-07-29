import { useState } from "react";
import { addProductToCart } from "services";

export default function usePostToCart() {
  const [loading, setLoading] = useState(false);

  const trigger = (id, colorCode, storageCode) => {
    setLoading(true);
    return addProductToCart(id, colorCode, storageCode).then((result) => {
      setLoading(false);
      return result.count;
    });
  };

  return { loading, trigger };
}
