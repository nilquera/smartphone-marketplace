import { Logo, Breadcrumb, Cart } from "components";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <Logo />
      <Breadcrumb />
      <Cart />
    </header>
  );
}
