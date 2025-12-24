import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST_URL } from "../utils/constant";
import useFetch from "../utils/useFetch";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const { data, loading, error } = useFetch(RESTAURANT_LIST_URL); //Custom Hook
  const listOfRestaurants =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || []; // imp: if API response is undefined [] will be set.

  const [filteredRes, setFilteredRes] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    setFilteredRes(listOfRestaurants);
    setNoDataFound(false);
  }, [listOfRestaurants]);

  const search = (formData) => {
    const searchValue = formData.get("search-res");
    const searchResult = listOfRestaurants.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (searchResult.length !== 0) {
      setNoDataFound(false);
      setFilteredRes(searchResult);
    } else {
      setNoDataFound(true);
    }
  };

  const filerByRating = () => {
    const filterRes = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.0
    );

    if (filterRes.length !== 0) {
      setNoDataFound(false);
      setFilteredRes(filterRes);
    } else {
      setNoDataFound(true);
    }
  };

  const messageContainer = () => {
    return (
      <div className="msg-container">
        <h2>Sorry, No restaurants found..</h2>
      </div>
    );
  };

  return (
    <div className="body-container flex-row justify-content-center">
      {loading ? (
        <Shimmer />
      ) : error ? (
        <div>{error}</div>
      ) : (
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
          {noDataFound ? (
            messageContainer()
          ) : (
            <div className="rest-cards-list-container">
              {filteredRes.map((restaurant) => (
                <Link
                  key={restaurant?.info?.id}
                  to={"restaurant/" + restaurant?.info?.id}
                >
                  <RestaurantCard restData={restaurant} />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
