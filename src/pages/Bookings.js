import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import "../pages/Bookings.css";
import { useReducer, useEffect } from "react";
import { fetchAPI } from "../api";

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Update available times with the fetched data
    case "REMOVE_TIME":
      return state.filter((time) => time !== action.payload); // Remove a booked time
    default:
      return state;
  }
}

export const initializeTimes = () => {
  return fetchAPI(new Date()); // Call fetchAPI with the current date
};

function Bookings({submitForm}) {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const times = initializeTimes();
    dispatch({ type: "UPDATE_TIMES", payload: times });
  },[]);

  return (
    <>
      <section aria-label="Hero section">
        <Hero />
      </section>
      <section className="Bookings" aria-label="Booking form">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
      </section>
    </>
  );
}


export default Bookings;
