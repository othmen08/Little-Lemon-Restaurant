import React, { useState } from "react";
import Hero from "../components/Hero";
import "../pages/Order.css";
import { dataCardsMenu } from "../data/Data";
import Cards from "../components/Cards";


function Order() {
 

  // État pour gérer le panier
  const [cart, setCart] = useState([]);

  // État pour gérer le formulaire de commande
  const [orderFormVisible, setOrderFormVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    notes: "",
  });

 

  // Fonction pour supprimer un plat du panier
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Fonction pour calculer le total du panier
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Fonction pour gérer la soumission du formulaire de commande
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { cart, orderDetails });
    alert("Your order has been placed successfully!");
    setCart([]); // Vider le panier après la commande
    setOrderFormVisible(false); // Masquer le formulaire
  };

  return (
    <div className="order-grid">
      <section>
        <Hero />
      </section>
      <section className="order-online">
        {/* Liste des plats disponibles */}
        <div className="order-menu">
          <h1>Online Menu:</h1>
          <Cards data={dataCardsMenu} cart={cart} setCart={setCart} />

        </div>

        {/* Panier */}
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price.toFixed(2)}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <p>Total: ${calculateTotal()}</p>
              <button onClick={() => setOrderFormVisible(true)}>Place Order</button>
            </>
          )}
        </div>

        {/* Formulaire de commande */}
        {orderFormVisible && (
          <div className="order-form">
            <h2>Order Details</h2>
            <form onSubmit={handleOrderSubmit}>
              <div className="field">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderDetails.name}
                  onChange={(e) =>
                    setOrderDetails({ ...orderDetails, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={orderDetails.address}
                  onChange={(e) =>
                    setOrderDetails({ ...orderDetails, address: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={orderDetails.phone}
                  onChange={(e) =>
                    setOrderDetails({ ...orderDetails, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="notes">Special Instructions:</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={orderDetails.notes}
                  onChange={(e) =>
                    setOrderDetails({ ...orderDetails, notes: e.target.value })
                  }
                ></textarea>
              </div>
              <button type="submit">Confirm Order</button>
              <button type="button" onClick={() => setOrderFormVisible(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default Order;