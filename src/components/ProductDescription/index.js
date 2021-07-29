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
    dimentions,
    weight,
  } = productDetails;

  const productDetailsArray = [
    { name: "brand", info: brand },
    { name: "model", info: model },
    { name: "price", info: price },
    { name: "cpu", info: cpu },
    { name: "ram", info: ram },
    { name: "os", info: os },
    { name: "displayResolution", info: displayResolution },
    { name: "battery", info: battery },
    { name: "primaryCamera", info: primaryCamera },
    { name: "secondaryCmera", info: secondaryCmera },
    { name: "dimentions", info: dimentions },
    { name: "weight", info: weight },
  ];

  return productDetailsArray.map(({ name, info }, key) => {
    return (
      <p key={key}>
        {name}: {info}
      </p>
    );
  });
}
