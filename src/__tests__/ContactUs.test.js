import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("should check if Contact Us component is loaded", () => {
    render(<ContactUs />);

    //Query
    const heading = screen.getByText("Contact Us ☎️");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Submit button", () => {
    render(<ContactUs />);

    //Query
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should have 2 inputs in the form", () => {
    render(<ContactUs />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});
