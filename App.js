const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "headingA1" }, "Nested heading from 1"),
    React.createElement("h2", { id: "headingA2" }, "Nested sub heading from 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "headingB1" }, "Nested heading from 2"),
    React.createElement("h2", { id: "headingB2" }, "Nested sub heading from 2"),
  ]),
]);
const heading = React.createElement("h1", {}, "Hi There");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("heading Element", heading);
console.log("root Element", root);
root.render(parent);
