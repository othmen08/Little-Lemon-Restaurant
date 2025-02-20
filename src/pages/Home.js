import Hero from "../components/Hero";
import { dataCardsReview, dataCardsMenu } from "../data/Data";
import "../pages/Home.css";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <div className="home-grid">
      <Hero />
      <Specials data={dataCardsMenu} />
      <Testimonials data={dataCardsReview} />
      <section className="Abouts">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
