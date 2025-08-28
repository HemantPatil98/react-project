import { LOGO_URL } from "../utils/constant";
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} alt="" width={80} height={85} />
    </div>
    <div className="nav-items">
      <ul className="nav-items-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Offers</li>
        <li className="nav-item">Help</li>
        <li className="nav-item">Sign In</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
