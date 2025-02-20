import "../components/TestimonialCards.css";
function TestimonialCards({ data }) {
  return (
    <section className="Testimonial-Cards">
      {data.map((card, index) => (
        <article key={index} className="Testimonial-Card">
          <h2 className="rating">{card.rating}</h2>
          <h2>{card.name}</h2>
          <img src={card.img} alt="delivery Icon" />
          <p>{card.review}</p>
        </article>
      ))}
    </section>
  );
}

export default TestimonialCards;
