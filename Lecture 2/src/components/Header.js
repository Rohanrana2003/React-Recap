import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <p className="logo">
          <Link to="/">REACTAURANT</Link>
        </p>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
