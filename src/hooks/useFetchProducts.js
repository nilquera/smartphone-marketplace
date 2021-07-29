import { useEffect, useState } from "react";
import { getProducts, setObjectCached, getObjectCached } from "services";

const TTL = 1000 * 3600;

export default function useFetchProducts() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);

    const cachedProductList = getObjectCached("cachedProductList");

    if (cachedProductList) {
      setProductList(cachedProductList);
    } else {
      getProducts().then((products) => {
        setProductList(products);

        setObjectCached("cachedProductList", products, TTL);
      });
    }
    setLoading(false);
  }, []);

  return { loading, productList };
}
