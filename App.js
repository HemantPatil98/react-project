import React from "react";
import { createRoot } from "react-dom/client";

//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement (render)
const jsxHeading = <h1 className="heading">Hi There...👋🏻</h1>;
console.log(jsxHeading);
const root = createRoot(document.getElementById("root"));
root.render(jsxHeading);
