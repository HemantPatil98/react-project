import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";

//mock the useFetch Hook

jest.mock("../utils/useFetch", () => () => ({
  data: {
    cards: [
      {},
      {},
      {
        card: {
          card: {
            info: {
              id: "123456",
              name: "Pizza Paradise",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
              locality: "MG Road",
              areaName: "Central District",
              costForTwo: "₹400 for two",
              costForTwoMessage: "₹400 for two",
              cuisines: ["Pizza", "Italian", "Fast Food"],
              avgRating: 4.3,
              avgRatingString: "4.3",
              totalRatingsString: "10K+ ratings",
              sla: {
                deliveryTime: 30,
                lastMileTravel: 3.5,
                lastMileTravelString: "3.5 km",
                slaString: "30 mins",
              },
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "item_001",
                              name: "Margherita Pizza",
                              category: "Pizza",
                              description:
                                "Classic delight with 100% real mozzarella cheese, fresh tomatoes, and basil",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                              price: 29900,
                              defaultPrice: 29900,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "item_002",
                              name: "Pepperoni Pizza",
                              category: "Pizza",
                              description:
                                "American classic with spicy pepperoni slices and extra cheese",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                              price: 39900,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "item_003",
                              name: "Veggie Supreme",
                              category: "Pizza",
                              description:
                                "Loaded with fresh vegetables including bell peppers, onions, tomatoes, and olives",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                              price: 34900,
                              defaultPrice: 34900,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Specialty Pizzas",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "item_004",
                              name: "BBQ Chicken Pizza",
                              category: "Pizza",
                              description:
                                "Grilled chicken with tangy BBQ sauce, onions, and cheese",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                              price: 44900,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "item_005",
                              name: "Hawaiian Pizza",
                              category: "Pizza",
                              description:
                                "Tropical delight with ham, pineapple, and mozzarella cheese",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                              price: 42900,
                              defaultPrice: 42900,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Beverages",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "item_006",
                              name: "Coca Cola",
                              category: "Beverages",
                              description: "Chilled 500ml Coca Cola",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                              price: 5900,
                              defaultPrice: 5900,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
}));

it("Should render restaurant menu accordions", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>,
    );
  });

  const accordion = screen.getByText("Recommended (3)");

  expect(accordion).toBeInTheDocument();
});

it("Should add item in cart when clicked on Add button", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>,
    );
  });

  const accordion = screen.getByText("Recommended (3)");

  const cartMenuWithNoItem = screen.getByText("Cart (0)");

  expect(cartMenuWithNoItem).toBeInTheDocument();

  fireEvent.click(accordion);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtn[0]);

  const cartMenuWithItem = screen.getByText("Cart (1)");

  expect(cartMenuWithItem).toBeInTheDocument();
});

it("Should show added item in the Cart page when add button clicked", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>,
    );
  });

  const accordion = screen.getByText("Recommended (3)");

  fireEvent.click(accordion);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtn[0]);

  const itemInCart = screen.getAllByTestId("cartItem");

  expect(itemInCart.length).toBe(2);
});

it("Should remove item from cart when remove button clicked", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>,
    );
  });

  const accordion = screen.getByText("Recommended (3)");

  fireEvent.click(accordion);

  const removeBtn = screen.getAllByRole("button", { name: "-" });

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  fireEvent.click(removeBtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
});

it("Should empty the cart when Clear Cart button is clicked", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>,
    );
  });

  const itemInCart = screen.getAllByTestId("cartItem");

  expect(itemInCart.length).toBe(1);

  const clearCartBtn = screen.getByText("Clear Cart");

  fireEvent.click(clearCartBtn);

  const noItemMsg = screen.getByText("Cart is empty, please add some items");

  expect(noItemMsg).toBeInTheDocument();
});
