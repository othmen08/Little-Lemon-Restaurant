import '../components/Cards.css';
import { Link,useLocation } from 'react-router-dom';
function Cards({data,cart,setCart}) {
  const location = useLocation();
   // Fonction pour ajouter un plat au panier
   const addToCart = (card) => {
    setCart([...cart, card]);
  };

  
    return(
        <section className="group_cards">
      {data.map((card, index) => (
        <article key={index} className="card">
          <img src={card.img} alt="Our Menu" />
          <div>
          <h2 className='title-card'>{card.title}</h2>
          <h2 className='price'>$ {card.price}</h2>
          <p>{card.description}</p>
          {location.pathname === "/order" ? (
          <button onClick={() => addToCart(card)}>Add to Cart</button>)
        :(<button type='submit'><Link to="/order">Order Now</Link></button>)}
          </div>
        </article>
      ))}
    </section>
    )
}

export default Cards;