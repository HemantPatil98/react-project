import { useContext, useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const userData = useContext(UserContext);
  const [userInitials, setUserInitials] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);

  //selector
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (userData?.firstName && userData.lastName) {
      setUserInitials(
        userData.firstName.charAt(0) + userData.lastName.charAt(0),
      );
    }
  }, [userData]);

  useEffect(() => {
    const totalCount = cartItems.reduce((sum, item) => sum + item.itemCount, 0);

    setCartItemCount(totalCount);
  }, [cartItems]);

  return (
    <div className="px-20 py-2 flex flex-row justify-between bg-white shadow-lg shadow-gray-200 sticky top-0 z-10">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" width={80} height={85} />
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row items-center">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-2">
            <Link to="/cart">Cart ({cartItemCount})</Link>
          </li>
          <li className="bg-yellow-800 m-2 p-2 border border-none rounded-3xl text-white">
            <Link to="/profile/1">{userInitials || "U"}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
