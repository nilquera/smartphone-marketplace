import "./styles.css";
import shopingCart from "assets/images/shopping-cart.svg";
import Context from "context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cartItems } = useContext(Context);

  return (
    <div className="header-cart">
      <img src={shopingCart} alt="Icon made by Freepik from Flaticon" />
      <span>{cartItems}</span>
    </div>
  );
}
