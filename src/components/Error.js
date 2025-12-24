import { useRouteError } from "react-router";
const Error = () => {
  // hook provided by react-router library which returns error thrown during component render, action or loader
  const err = useRouteError();

  return (
    <div>
      <h1>Oops❗️</h1>
      <h2>Something went wrong... </h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
