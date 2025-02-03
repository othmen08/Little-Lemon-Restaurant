import "../components/Hero.css";
import chefPhoto from "../assets/chef.jpg";
function Hero() {
  return (
    <div className="container">
      <div className="hero-details">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="btn_reserve">Reserve a table</button>
      </div>
      <div className="img-box">
        <img className="chefPhoto" src={chefPhoto} alt="chef-Photo" />
      </div>
    </div>
  );
}

export default Hero;
