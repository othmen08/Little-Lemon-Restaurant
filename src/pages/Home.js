import Hero from "../components/Hero";
import Cards from "../components/Cards";
import {dataCardsReview,dataCardsMenu} from '../data/Data';
import "../pages/Home.css";
import Reviews from "../components/Reviews";
function Home() {
  
 
  return (
    <div className="home-grid">
      <section className="hero"><Hero /></section>
      <section className="specials">
        <div>
          <h1>This weeks specials</h1>
          <button>Online Menu</button>
        </div>
        <Cards data={dataCardsMenu} />
      </section>
      <section className="Testimonials">
      <h1>Testimonials</h1>
      <Reviews data={dataCardsReview} />
      </section>
      <section className="Abouts">
      <Hero />
      </section>
      
    </div>
  );
}

export default Home;
