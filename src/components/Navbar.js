import {Link} from "react-router-dom";
import '../components/Navbar.css'


function Navbar({props}) {
 
  return (
    
      <nav className={`nav ${props ? "show" : ""}`}>
        <ul className="navList">
          <li>
            <Link className="linkS" to="/">Home</Link>
          </li>
          <li>
            <Link className="linkS" to="about">About</Link>
          </li>
          <li>
            <Link className="linkS" to="menu">Menu</Link>
          </li>
          <li>
            <Link className="linkS" to="Bookings">Bookings</Link>
          </li>
          <li>
            <Link className="linkS" to="order">Order</Link>
          </li>
          <li>
            <Link className="linkS" to="confirmation">Confirmation</Link>
          </li>
          <li>
            <Link className="linkS" to="login">Login</Link>
          </li>
        </ul>
      </nav>
    
  );
}

export default Navbar;
