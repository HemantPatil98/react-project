import { useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import MenuAccordion from "./MenuAccordion";
import useFetch from "../utils/useFetch";
import { RestaurantMenuRounded, StarsRounded } from "@mui/icons-material";

const RestaurantMenu = () => {
  const [showMenuIndex, setShowMenuIndex] = useState(null);
  const param = useParams();
  const resMenuUrlWithId = RESTAURANT_MENU_URL + param.resId;
  const { data, loading, error } = useFetch(resMenuUrlWithId);

  if (loading) return <Shimmer />;
  if (error) return <div>{error}</div>;

  const { name, avgRating, costForTwo, cuisines, totalRatingsString } =
    data?.cards[2]?.card?.card?.info || {};

  const cards = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const ratingStarColor = () => {
    let color = "";
    if (avgRating < 3) {
      color = "#e53935";
    } else if (avgRating < 4) {
      color = "#fbc02d";
    } else {
      color = "#8bc34a";
    }
    return color;
  };

  return (
    <div className="max-w-3xl w-3xl mx-auto flex flex-col">
      <div>
        <div className="pb-5 font-bold text-2xl">{name}</div>
        <div className="p-4 border border-gray-300 rounded-lg mb-6">
          <b className="text-base flex flex-row">
            <StarsRounded
              style={{ color: ratingStarColor() }}
              className="mr-1"
            />{" "}
            {avgRating} ({totalRatingsString}) - {costForTwo}
          </b>
          <p className="pt-1">{cuisines.join(", ")}</p>
        </div>
        <div className="mb-6 text-center text-base font-bold flex flex-row justify-center items-center">
          <RestaurantMenuRounded className="mr-1" /> Menu
        </div>
        <div className="text-sm mb-6 flex flex-row items-center">
          <button className="w-fit mr-2 p-2 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold">
            🟢 Veg
          </button>
          <button className="w-fit mr-2 p-2 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold">
            🔴 Non-veg
          </button>
          <button className="w-fit p-2 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold">
            👌 Best Seller
          </button>
        </div>
        <div>
          {cards.map((card, index) => {
            const cardData = card?.card?.card;
            if (!cardData) return null;

            return (
              <MenuAccordion
                key={cardData?.title}
                cardData={cardData}
                showMenuList={index === showMenuIndex}
                setShowMenuIndex={() => setShowMenuIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
