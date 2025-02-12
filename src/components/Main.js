import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import Order from "../pages/Order";
import Login from "../pages/Login";
import { useReducer } from "react";

 const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
 export function timesReducer(state, action) {
  if (action.type === "REMOVE_TIME") {
    return state.filter((time) => time !== action.payload);
  }
  return state;
}

function Main() {
  
  const [availableTimes, dispatch] = useReducer(timesReducer, initialState);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route
          path="reservations"
          element={
            <Reservations availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;
