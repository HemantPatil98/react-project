import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => (
  <div className="applayout">
    <Header />
    <Body />
  </div>
);

const root = createRoot(document.getElementById("root"));

//React components needs to be rendered with angular brackets
root.render(<AppLayout />);
