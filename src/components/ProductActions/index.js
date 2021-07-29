import { usePostToCart } from "hooks";
import { useState } from "react";

export default function ProductActions({ productDetails }) {
  const { colors, id } = productDetails;

  const [storage, setStorage] = useState("64");
  const [color, setColor] = useState(colors[0]);
  const { loading, trigger } = usePostToCart();

  const handleChangeStorage = (evt) => {
    setStorage(evt.target.value);
  };

  const handleChangeColor = (evt) => {
    setColor(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const count = await trigger(1, 1, 1);
    console.log(count);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Storage
        <select value={storage} onChange={handleChangeStorage}>
          <option value="64">64 GB</option>
          <option value="128">128 GB</option>
          <option value="256">256 GB</option>
        </select>
      </label>
      <label>
        Color
        <select value={color} onChange={handleChangeColor}>
          {colors.map((color, key) => {
            return (
              <option key={key} value={color}>
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
