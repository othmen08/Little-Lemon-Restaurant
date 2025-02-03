import React, { useState } from "react";
import Hero from "../components/Hero";
import "../pages/Reservations.css";
function Reservations() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    seating: "indoor",
    occasion: "",
    specialRequest: "",
    contactPreference: "call",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Logique pour envoyer les données au serveur
    console.log("Données confirmées:", formData);
    alert("Réservation confirmée !");
    setShowConfirmation(false);
    // Réinitialiser le formulaire si nécessaire
    setFormData({
      date: "",
      time: "",
      guests: "",
      seating: "indoor",
      occasion: "",
      specialRequest: "",
      contactPreference: "call",
    });
  };

  const handleEdit = () => {
    setShowConfirmation(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="Reservation">
        {!showConfirmation ? (
        <form className="form" onSubmit={handleSubmit}>
          {/* Titre du formulaire */}
          <legend>Book a Table</legend>

          {/* Champ Date */}
          <div className="field-row">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Time */}
          <div className="field-row">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Number of Guests */}
          <div className="field-row">
            <label htmlFor="guests">Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Seating Preference (Radio Buttons) */}
          <div className="field-row">
            <label>Seating:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="seating"
                  value="indoor"
                  checked={formData.seating === "indoor"}
                  onChange={handleChange}
                />
                Indoor
              </label>
              <label>
                <input
                  type="radio"
                  name="seating"
                  value="outdoor"
                  checked={formData.seating === "outdoor"}
                  onChange={handleChange}
                />
                Outdoor
              </label>
            </div>
          </div>

          {/* Champ Occasion (Dropdown) */}
          <div className="field-row">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business Meeting</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Champ Special Request (Textarea) */}
          <div className="field">
            <label htmlFor="specialRequest">Special Request:</label>
            <textarea
              id="specialRequest"
              name="specialRequest"
              rows="4"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Any special requests?"
            ></textarea>
          </div>

          {/* Champ Contact Preference (Radio Buttons) */}
          <div className="field">
            <label>Contact Preference</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="contactPreference"
                  value="call"
                  checked={formData.contactPreference === "call"}
                  onChange={handleChange}
                />
                Prefer to call
              </label>
              <label>
                <input
                  type="radio"
                  name="contactPreference"
                  value="email"
                  checked={formData.contactPreference === "email"}
                  onChange={handleChange}
                />
                Prefer email
              </label>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="field">
            <button className="btn_submit" type="submit">
              Book my Table
            </button>
          </div>
        </form>
        ):( <div className="confirmation-form">
            <h2>Confirmer la réservation</h2>
            
            <div className="confirmation-details">
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Time:</strong> {formData.time}</p>
              <p><strong>Guests:</strong> {formData.guests}</p>
              <p><strong>Seating:</strong> {formData.seating}</p>
              <p><strong>Occasion:</strong> {formData.occasion}</p>
              <p><strong>Contact Preference:</strong> {formData.contactPreference}</p>
              <p><strong>special Request:</strong> {formData.specialRequest}</p>
            </div>

            <div className="confirmation-buttons">
              <button 
                className="btn_confirm"
                onClick={handleConfirm}
              >
                Confirmer
              </button>
              
              <button 
                className="btn_edit"
                onClick={handleEdit}
              >
                Modifier
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
export default Reservations;
