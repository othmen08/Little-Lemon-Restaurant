import Hero from "../components/Hero";
import Cards from "../components/Cards";
import bruschetta from "../assets/Bruschetta.jpg";
import pasta from "../assets/italien-pasta.jpg";
import salad from "../assets/greek-salad.jpg";
import "../pages/Home.css";
import Reviews from "../components/Reviews";
function Home() {
  const dataCardsMenu = [
    {
      id: "0",
      img: bruschetta,
      title: "Our Menu",
      price: 25,
      description:
        "Dive into a curated selection of Mediterranean-inspired dishes, blending tradition and innovation.",
      buttonTitle: "Explore Menu",
    },
    {
      id: "1",
      img: pasta,
      title: "Our Chefs",
      price: 30,
      description:
        "Meet the culinary masters behind our exquisite dishes. ",
      buttonTitle: "Meet the Chefs",
    },
    {
      id: "2",
      img: salad,
      title: "Our Ambiance",
      price: 40,
      description:
        "Step into a warm and inviting atmosphere that captures the essence of the Mediterranean. ",
      buttonTitle: "Discover More",
    },
  ];
  const dataCardsReview = [
    {
      id: "0",
      img: bruschetta,
      name: "Our Menu",
      rating: 25,
      review:
        "Dive into a curated selection of Mediterranean-inspired dishes, blending tradition and innovation. Every dish is crafted with the freshest ingredients to bring you an authentic and flavorful experience.",
    },
    {
      id: "1",
      img: pasta,
      name: "Our Chefs",
      rating: 30,
      review:
        "Meet the culinary masters behind our exquisite dishes. Our chefs bring years of experience and a passion for Mediterranean cuisine, blending traditional techniques with modern creativity.",
    },
    {
      id: "2",
      img: salad,
      name: "Our Ambiance",
      rating: 40,
      review:
        "Step into a warm and inviting atmosphere that captures the essence of the Mediterranean. Whether you're enjoying a cozy dinner or a lively gathering.",
    },
  ];
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
