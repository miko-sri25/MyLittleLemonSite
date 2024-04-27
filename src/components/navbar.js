import { NavLink } from 'react-router-dom'
import './navbar.css'
import navlogo from '../assests/nav-logo.png'

const Navbar = () => {
    return (
      <nav className="navbar">
      <div className="container">
        <div className="logo">
            <img src={navlogo} alt='logo' width='250px'/>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/order">Order</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
  export default Navbar