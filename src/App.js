import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import UserProfile from "./components/UserProfile";
import UserInfo from "./components/userInfo";
import EditUserInfo from "./components/EditUserInfo";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <div className="applayout">
    <Header />
    {/** Children routes will render in place of <Outlet/> */}
    <Outlet />
  </div>
);

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

const root = createRoot(document.getElementById("root"));

//React components needs to be rendered with angular brackets
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />} errorElement={<Error />}>
        <Route index element={<Body />}></Route>
        <Route path="about" element={<AboutUs />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="profile">
          <Route index element={<UserProfile />}></Route>
          <Route path=":pid" element={<UserInfo />}></Route>
          <Route path="editprofile" element={<EditUserInfo />}></Route>
        </Route>
        <Route path="restaurant/:resId" element={<RestaurantMenu />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
