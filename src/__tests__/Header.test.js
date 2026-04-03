import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component render", () => {
  it("Should render logo", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const logo = screen.getByAltText("logo");

    expect(logo).toBeInTheDocument();
  });

  it("Should render Cart with 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartWithZeroItems = screen.getByText("Cart (0)");

    expect(cartWithZeroItems).toBeInTheDocument();
  });
});
