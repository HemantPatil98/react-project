import { useContext } from "react";
import UserContext from "../utils/UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div className="max-w-3xl w-3xl mx-auto flex flex-col">
      <h1 className="pb-5 font-bold text-2xl">Profile</h1>
      <ul className="mb-5">
        <li>
          <span className="font-bold text-lg mr-6">First Name : </span>
          {userData?.firstName}
        </li>
        <li>
          <span className="font-bold text-lg mr-6.5">Last Name : </span>
          {userData?.lastName}
        </li>
        <li>
          <span className="font-bold text-lg mr-17.5">Email : </span>
          {userData?.email}
        </li>
        <li>
          <span className="font-bold text-lg mr-11.5">Address : </span>
          {userData?.address}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
