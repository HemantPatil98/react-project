import React from "react";
import { createRoot } from "react-dom/client";

//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement (render)
const jsxHeading = <h1 className="heading">Hi There...👋🏻</h1>;

//React component syntax => withoout {} and return
const Title = () => <h1 className="title">Hi There...👋🏻</h1>;

//React Component
const HeadingComponent = () => {
  return (
    <div className="container">
      {/* component composition => nesting one react component into another. */}
      <Title />
      <h2 className="heading">This is a heading component..</h2>
    </div>
  );
};

console.log(HeadingComponent);
const root = createRoot(document.getElementById("root"));

//React components needs to be rendered with angular brackets
root.render(<HeadingComponent />);
