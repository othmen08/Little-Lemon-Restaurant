import footerLogo from '../assets/footer-logo.png';
import '../components/Footer.css'
function Footer() {
  return (
    <footer>
      <div>
        <img width={150} src={footerLogo} alt="footer-logo" />
      </div>
      <div>
        <ul>
          <li>
            <b>Doormat Navigation</b>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <b>Contact</b>
          </li>
          <li>Adress</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
      <ul>
          <li>
            <b>Social Media</b>
          </li>
          <li>Adress</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
