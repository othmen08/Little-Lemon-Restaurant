import "../components/Hero.css";
import chefPhoto from "../assets/chef.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
     
        <h1>Little Lemon</h1>
        <h2 className="hero-second-title">Chicago</h2>
        <div className="hero-details">
        
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        
        <img className="chefPhoto" src={chefPhoto} alt="chef-Photo" />
      
        
      </div>
      <Link  to="bookings" className="btn_reserve">Reserve a table</Link>
      
    </section>
  );
}

export default Hero;
