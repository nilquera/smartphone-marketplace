import "./styles.css";
import Context from "context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cartItems } = useContext(Context);

  return (
    <div className="header-cart">
      <img
        src="https://icon-library.com/images/cart-icon-free/cart-icon-free-0.jpg"
        alt="Shopping cart Icon"
      />
      <span>{cartItems}</span>
    </div>
  );
}
