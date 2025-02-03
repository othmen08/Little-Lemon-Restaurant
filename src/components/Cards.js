import '../components/Cards.css'
function Cards({data}) {
    return(
        <section className="group_cards">
      {data.map((card, index) => (
        <article key={index} className="card">
          <img src={card.img} alt="Our Menu" />
          <div>
          <h2 className='title-card'>{card.title}</h2>
          <h2 className='price'>$ {card.price}</h2>
          <p>{card.description}</p>
          <button id={card.id} type="submit">
            {card.buttonTitle} ---{'>'}
          </button>
          </div>
        </article>
      ))}
    </section>
    )
}

export default Cards;