import "../components/Hero.css";
import chefPhoto from "../assets/chef.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-details">
      <h1 className="hero-title">Little Lemon</h1>
      <h2 className="hero-second-title">Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link  to="Bookings" className="btn_reserve">Reserve a table</Link>
      </div>
      <div className="img-box">
        <img className="chefPhoto" src={chefPhoto} alt="chef-Photo" />
      </div>
    </section>
  );
}

export default Hero;
