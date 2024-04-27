import { Routes, Route } from "react-router-dom";
import Homepage from "./components/navbarPages/homepage";
import About from "./components/navbarPages/about";
import Reservation from "./components/navbarPages/reservation";
import Order from "./components/navbarPages/order";
import Login from "./components/navbarPages/login";
import Menu from "./components/navbarPages/menu";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/menu" element={<Menu/>} />
    </Routes>
  );
}
export default Routing