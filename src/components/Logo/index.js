import logoSrc from "assets/images/logo.png";
import "./styles.css";

export default function Logo() {
  return (
    <a href="/">
      <img className="logo" src={logoSrc} alt="smartphone-marketplace-logo" />
    </a>
  );
}
