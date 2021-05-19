import { Link } from "react-router-dom";
import "./componentDesign.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark t">
      <li className="navbar-brand">
        <Link to="/">SBS</Link>
      </li>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/customer">Customer</Link>
          </li>
          <li className="nav-item">
            <Link to="/storeIncharge">StoreIncharge</Link>
          </li>
          <li className="nav-item">
            <Link to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking">Booking</Link>
          </li>
          <li className="nav-item">
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </div>
{/*       <div>
        <li className="nav-item">
            <Link to="/login">Login</Link> </li>
        <li className="nav-item">
            <Link to="/register">Register</Link>
          </li>
       </div> */}
    </nav>
  );
};

export default Nav;
