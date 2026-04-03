import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import RES_DATA from "../mock/restaurantList";
import "@testing-library/jest-dom";

describe("Test RestaurantCard", () => {
  it("Should render card deails", () => {
    render(<RestaurantCard restData={RES_DATA} />);

    const restaurantName = screen.getByText("Pizza Paradise");

    expect(restaurantName).toBeInTheDocument();
  });
});
