import "./styles.css";
import Context from "context/CartContext";
import { usePostToCart } from "hooks";
import { useContext, useState } from "react";

export default function ProductActions({ productDetails }) {
  const { colors, id } = productDetails;

  const [storage, setStorage] = useState(1);
  const [color, setColor] = useState(0);
  const { trigger } = usePostToCart();
  const { cartItems, setCartItems } = useContext(Context);

  const handleChangeStorage = (evt) => {
    setStorage(Number(evt.target.value));
  };

  const handleChangeColor = (evt) => {
    setColor(Number(evt.target.value));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const count = await trigger(id, color + 1, storage);
    setCartItems(cartItems + count);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Storage
        <select value={storage} onChange={handleChangeStorage}>
          <option value="1">64 GB</option>
          <option value="2">128 GB</option>
          <option value="3">256 GB</option>
        </select>
      </label>
      <label>
        Color
        <select value={color} onChange={handleChangeColor}>
          {colors.map((color, key) => {
            return (
              <option key={key} value={key}>
                {color}
              </option>
            );
          })}
        </select>
      </label>

      <input type="submit" value="Add to cart" />
    </form>
  );
}
