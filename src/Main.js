import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Order from "./Order";
import Login from "./Login";
function Main() {
    return(
        <>
        <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </main>
        </>
    )
}

export default Main;