import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Bookings from "../pages/Bookings";
import Order from "../pages/Order";
import Login from "../pages/Login";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmation");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="bookings" element={<Bookings submitForm={submitForm} />} />
        <Route path="order" element={<Order />} />
        <Route path="confirmation" element={<ConfirmedBooking />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;
