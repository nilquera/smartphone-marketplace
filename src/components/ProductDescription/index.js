import "./styles.css";

export default function ProductDescription({ productDetails }) {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
  } = productDetails;

  const productDetailsMainArray = [
    brand,
    model,
    `${displayResolution} screen`,
    `${primaryCamera} camera`,
  ];

  const productDetailsArray = [
    { name: "cpu", info: cpu },
    { name: "ram", info: ram },
    { name: "os", info: os },
    { name: "battery", info: battery },
    { name: "secondaryCmera", info: secondaryCmera },
    { name: "price", info: price },
  ];

  return (
    <>
      <div className="main-details">
        {productDetailsMainArray.map((string, key) => {
          return (
            <span key={key}>
              {string}
              {key !== productDetailsMainArray.length - 1 && " · "}
            </span>
          );
        })}
      </div>
      <div className="secondary-details">
        {productDetailsArray.map(({ name, info }, key) => {
          return (
            <p key={key}>
              {name}: {info}
            </p>
          );
        })}
      </div>
    </>
  );
}
