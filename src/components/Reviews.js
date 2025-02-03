import '../components/Reviews.css'
function Reviews({data}) {
  return (
    <section className="group_reviews">
      {data.map((card, index) => (
        <article key={index} className="review">
            <h2 className="rating">$ {card.rating}</h2>
          <h2>{card.name}</h2>
        <img src={card.img} alt="Our Menu" />
          <p>{card.review}</p>
        </article>
      ))}
    </section>
  );
}

export default Reviews;
