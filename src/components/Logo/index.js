import logoSrc from "assets/images/logo.png";
import "./styles.css";

export default function Logo() {
  return (
    <div className="header-logo">
      <a href="/">
        <img src={logoSrc} alt="smartphone-marketplace-logo" />
      </a>
    </div>
  );
}
