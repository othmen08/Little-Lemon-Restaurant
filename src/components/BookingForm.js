import "../components/BookingForm.css";
import { useState } from "react";
function BookingForm({availableTimes,dispatch}) {
  

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
        dispatch({ type: "REMOVE_TIME", payload: formData.time });
      };
    
      const handleConfirm = () => {
        console.log("Données confirmées:", formData);
        alert("Réservation confirmée !");
        setShowConfirmation(false);
    
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

      
    return(
        <>
         {!showConfirmation ? (
          <form className="form" onSubmit={handleSubmit}>
            <legend>Book a Table</legend>

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

            <div className="field-row">
              <label htmlFor="time">Time:</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                {availableTimes.map((timeOption,index)=>(
                <option key={index} value={timeOption}>{timeOption}</option>))}
                </select>
            </div>

            <div className="field-row">
              <label htmlFor="guests">Guests:</label>
              <input
                type="number"
                placeholder="1"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-row">
              <label>Seating:</label>
              <div className="radio-group" aria-labelledby="seating-label">
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

            <div className="field">
              <label>Contact Preference</label>
              <div className="radio-group" aria-labelledby="contactPreference-label">
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

            <div className="field">
              <button className="btn_submit" type="submit">
                Book my Table
              </button>
            </div>
          </form>
        ) : (
          <section className="confirmation-form" aria-live="polite">
            <h1>Confirm the booking</h1>
            <div className="confirmation-details">
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
              <p>
                <strong>Time:</strong> {formData.time}
              </p>
              <p>
                <strong>Guests:</strong> {formData.guests}
              </p>
              <p>
                <strong>Seating:</strong> {formData.seating}
              </p>
              <p>
                <strong>Occasion:</strong> {formData.occasion}
              </p>
              <p>
                <strong>Contact Preference:</strong>{" "}
                {formData.contactPreference}
              </p>
              <p>
                <strong>special Request:</strong> {formData.specialRequest}
              </p>
            </div>

            <div className="confirmation-buttons">
              <button className="btn_confirm" type="submit" onClick={handleConfirm}>
                Confirm
              </button>

              <button className="btn_edit" onClick={handleEdit}>
                Back
              </button>
            </div>
          </section>
        )}
        </>
    )
}

export default BookingForm ;