const { createContext, useState } = require("react");

const Context = createContext({});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Context.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
