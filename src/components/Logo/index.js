import logoSrc from "assets/images/logo.png";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Logo() {
  return (
    <div className="header-logo">
      <Link to="/">
        <img src={logoSrc} alt="smartphone-marketplace-logo" />
      </Link>
    </div>
  );
}
