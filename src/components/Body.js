import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const search = (formData) => {
    const searchValue = formData.get("search-res");
    const searchResult = restaurants.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredRes(searchResult);
  };

  const filerByRating = () => {
    const filterRes = filteredRes.filter((res) => res.info.avgRating >= 4.0);
    setFilteredRes(filterRes);
  };

  const fetchRestaurantsData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      setFilteredRes(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("An error occured: ", error);
    }
  };

  const renderShimmerUI = () => {
    return <Shimmer />;
  };

  return (
    <div className="body-container">
      {filteredRes.length === 0 && renderShimmerUI()}
      {filteredRes.length !== 0 && (
        <div className="rest-container">
          <div className="filter-bar">
            <div className="search-bar-container">
              <form action={search}>
                <input
                  className="search-input"
                  type="search"
                  name="search-res"
                  id="res-search"
                />
                <button className="btn submit-btn" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="rating-filter">
              <button className="filter-btn" onClick={filerByRating}>
                Rating 4.0+
              </button>
            </div>
          </div>
          <div className="rest-cards-list-container">
            {filteredRes.map((restaurant) => (
              <RestaurantCard
                key={restaurant?.info?.id}
                restData={restaurant}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
