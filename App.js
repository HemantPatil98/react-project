import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 1 }, [
    React.createElement(
      "h1",
      { id: "headingA1", key: 1.1 },
      "Nested heading from 1"
    ),
    React.createElement(
      "h2",
      { id: "headingA2", key: 1.2 },
      "Nested sub heading from 1"
    ),
  ]),
  React.createElement("div", { id: "child2", key: 2 }, [
    React.createElement(
      "h1",
      { id: "headingB1", key: 2.1 },
      "Nested heading from 2"
    ),
    React.createElement(
      "h2",
      { id: "headingB2", key: 2.2 },
      "Nested sub heading from 2"
    ),
  ]),
]);
const heading = React.createElement("h1", {}, "Hi There");
const root = createRoot(document.getElementById("root"));
console.log("heading Element", heading);
console.log("root Element", root);
root.render(parent);
