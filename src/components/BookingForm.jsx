import { fetchAPI } from "../api";
import "../components/BookingForm.css";
import { useState, useEffect } from "react";
import Confirmation from "./Confirmation";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    seating: "indoor",
    occasion: "",
    specialRequest: "",
    contactPreference: "call",
  });

  const isFormValid = () => {
    return (
      formData.date !== "" &&
      formData.time !== "" &&
      formData.guests > 0 &&
      formData.guests <= 10
    );
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  // Fetch available times when the date changes
  useEffect(() => {
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const times = fetchAPI(selectedDate); 
      dispatch({ type: "UPDATE_TIMES", payload: times });
    }
  }, [formData.date, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    dispatch({ type: "REMOVE_TIME", payload: formData.time });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {!showConfirmation ? (
        <form className="booking-form" onSubmit={handleSubmit}>
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
              aria-required="true"
            />
          </div>

          <div className="field-row">
            <label htmlFor="time" id="time-label">
              Time:
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              aria-required="true"
              aria-labelledby="time-label"
            >
              <option value="">Select a time</option>
              {availableTimes.map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))}
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
              aria-required="true"
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
              aria-required="true"
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
              aria-label="Special Request"
              rows="4"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Any special requests?"
            ></textarea>
          </div>

          <div className="field">
            <label>Contact Preference</label>
            <div
              className="radio-group"
              aria-labelledby="contactPreference-label"
            >
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
            <button
              className={"btn " + (isFormValid() ? "submit" : "disabled")}
              type="submit"
              disabled={!isFormValid()}
              aria-disabled={!isFormValid()}
            >
              Book my Table
            </button>
          </div>
        </form>
      ) : (
        <Confirmation
          formData={formData}
          setFormData={setFormData}
          setShowConfirmation={setShowConfirmation}
          dispatch={dispatch}
          availableTimes={availableTimes}
          submitForm={submitForm}
        />
      )}
    </>
  );
}

export default BookingForm;
