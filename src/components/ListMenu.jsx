import {Link} from "react-scroll";
import '../components/ListMenu.css'


function ListMenu() {
 
  return (
    
      <nav className="nav-list">
        <ul className="list">
          <li>
            <Link className="item" smooth={true} duration={500} to="lunch">Lunch</Link>
          </li>
          <li>
            <Link className="item" smooth={true} duration={500} to="about">Mains</Link>
          </li>
          <li>
            <Link className="item" smooth={true} duration={500} to="desserts">Desserts</Link>
          </li>
          <li>
            <Link className="item" smooth={true} duration={500} to="reservations">A La Carte</Link>
          </li>
          <li>
            <Link className="item" smooth={true} duration={500} to="order">Special</Link>
          </li>
          <li>
            <Link className="item" smooth={true} duration={500} to="breakfast">breakfast</Link>
          </li>
        </ul>
      </nav>
    
  );
}

export default ListMenu;
