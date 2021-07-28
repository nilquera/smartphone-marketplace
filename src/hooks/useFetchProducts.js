import { useEffect, useState } from "react";
import { getProducts } from "services";

export default function useFetchProducts() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);

    getProducts().then((products) => {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  return { loading, productList };
}
