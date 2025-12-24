import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} alt="" width={80} height={85} />
    </div>
    <div className="nav-items">
      <ul className="nav-items-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
