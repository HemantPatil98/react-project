import React from "react";
import { createRoot } from "react-dom/client";

//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement (render)
const jsxHeading = <h1 className="heading">Hi There...👋🏻</h1>;

//React Component
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 className="heading">Hi This is a heading component..</h1>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

//React components needs to be rendered with angular brackets
root.render(<HeadingComponent />);
