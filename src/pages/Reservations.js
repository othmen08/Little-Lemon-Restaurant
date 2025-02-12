import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import "../pages/Reservations.css";
import PropTypes from "prop-types";
function Reservations({ availableTimes, dispatch }) {
  return (
    <>
      <section aria-label="Hero section">
        <Hero />
      </section>
      <section className="Reservation_form" aria-label="Reservation form">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </>
  );
}

Reservations.propTypes = {
  availableTimes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default Reservations;
