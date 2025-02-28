import "../components/Header.css";
import logo from "../assets/Asset 16@4x.png";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY,setPrevScrollY] = useState(0);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setDisplay(window.scrollY < prevScrollY);
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
   <header className={display ? "visible" : "hidden"}>
    
      <img className="logo-header" src={logo} alt="logo" />
    
      <Navbar props={isMenuOpen} />
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
