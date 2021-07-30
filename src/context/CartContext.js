import { getObjectCached, setObjectCached } from "services";

const { createContext, useState } = require("react");

const Context = createContext({});

const TTL = 1000 * 60;

export function CartContextProvider({ children }) {
  const [cartItems, setCartItemsState] = useState(
    getObjectCached("cartItems") || 0
  );

  const setCartItems = (value) => {
    setCartItemsState(value);
    setObjectCached("cartItems", value, TTL);
  };

  return (
    <Context.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
