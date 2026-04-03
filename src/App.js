import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, BrowserRouter, Routes, Route } from "react-router";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import UserProfile from "./components/UserProfile";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import Cart from "./components/Cart.js";

//Lazy Loading
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"));

const AppLayout = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    //data is coming from an API call to get the logged in user
    const data = {
      firstName: "Hemant",
      lastName: "Patil",
      email: "hemantpatil@gmail.com",
      address: "Pune, Maharashtra",
    };

    setUserData(data);
  }, []);

  return (
    <div className="applayout">
      <UserContext value={userData}>
        <Header />
        {/** Children routes will render in place of <Outlet/> */}
        <main className="px-5 pt-10 flex flex-row justify-center">
          <Outlet />
        </main>
      </UserContext>
    </div>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     Component: AppLayout,
//     // Only component no path, hence it is a LAYOUT ROUTE
//     children: [
//       {
//         index: true, // will render Body component on defaut path ("/")
//         Component: Body,
//       },
//       {
//         path: "about", // At this path AboutUs component will replace Outlet component
//         Component: AboutUs,
//       },
//       {
//         path: "contact", // At this path ContactUs component will replace Outlet component
//         Component: ContactUs,
//       },
//       {
//         path: "/profile",
//         //No Component with just path hence it is a PREFIX ROUTE.
//         //No component hence index path component which is UserProfile will render at /profile.
//         children: [
//           {
//             index: true,
//             Component: UserProfile,
//           },
//           {
//             path: ":pid", //Dynamic segment
//             Component: UserInfo,
//           },
//           {
//             path: "editprofile",
//             Component: EditUserInfo,
//           },
//         ],
//       },
//       {
//         path: "restaurant/:resId",
//         Component: RestaurantMenu,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} errorElement={<Error />}>
          <Route index element={<Body />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="profile/:pid" element={<UserProfile />}></Route>
          <Route
            path="restaurant/:resId"
            element={
              <Suspense fallback={<Shimmer />}>
                <RestaurantMenu />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
