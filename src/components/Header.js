import "../components/Header.css";
import logo from "../assets/Asset 16@4x.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <img className="logo-header" src={logo} alt="logo" />
      <Navbar props={isMenuOpen} />
      <button className="cart-icon">🛒</button>
    </header>
  );
}

export default Header;
