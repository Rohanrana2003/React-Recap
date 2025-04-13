import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

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
            <Link to="/cart">Cart ({cart.length} items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
