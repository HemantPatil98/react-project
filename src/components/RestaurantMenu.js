import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import MenuAccordion from "./MenuAccordion";
import useFetch from "../utils/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const param = useParams();
  const resMenuUrlWithId = RESTAURANT_MENU_URL + param.resId;
  const { data, loading, error } = useFetch(resMenuUrlWithId);

  if (loading) return <Shimmer />;
  if (error) return <div>{error}</div>;

  const { name, avgRating, costForTwo, cuisines, totalRatingsString } =
    data?.cards[2]?.card?.card?.info || {};

  const cards = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="body-container">
      <div className="rest-list-main-container flex-column align-items-center">
        <div className="resName">{name}</div>
        <div className="resDetails">
          <b className="ratingAndPrice">
            <FontAwesomeIcon icon={faStar} /> {avgRating} ({totalRatingsString})
            - {costForTwo}
          </b>
          <p className="cuesine">{cuisines.join(", ")}</p>
        </div>
        <div className="menuHeader">
          Menu <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div className="filterToggles flex-row align-items-center">
          <div className="vegToggle">Veg</div>
          <div className="nonvegToggle">Nonveg</div>
          <div className="bestSellerToggle">Best Seller</div>
        </div>
        <div className="categoryAccordions">
          {cards.map((card) => {
            const cardData = card?.card?.card;
            if (!cardData) return null;

            return <MenuAccordion key={cardData?.title} cardData={cardData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
