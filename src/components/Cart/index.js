import "./styles.css";
import shopingCart from "assets/images/shopping-cart.svg";

export default function Cart() {
  const items = 4;
  return (
    <div className="header-cart">
      <img src={shopingCart} alt="Icon made by Freepik from Flaticon" />
      <span>{items}</span>
    </div>
  );
}
