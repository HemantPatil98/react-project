import { useState, useMemo } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useFetch from "../utils/useFetch";
import useOnlineStatus from "../utils/useOnlineStatus";
import useDebounce from "../utils/useDebounce";

const Body = () => {
  //UI states
  const [searchText, setSearchText] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);

  const { data, loading, error } = useFetch(RESTAURANT_LIST_URL); //Custom Hook
  const onlineStatus = useOnlineStatus();
  const debouncedSearchText = useDebounce(searchText, 400);

  const listOfRestaurants = useMemo(() => {
    return (
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }, [data]); // imp: if API response is undefined [] will be set.

  //🔥 If data can be derived → don’t store it in state

  /**🔴 We can derive filteredRestaurants every time from listOfRestaurants,
      debouncedSearchText, ratingFilter value changes.*/
  /**🔴 It is a costly operation hence we are using useMemo with
   listOfRestaurants, debouncedSearchText, ratingFilter in dependancy Array.*/

  //Memoising filteredRestaurants
  const filteredRestaurants = useMemo(() => {
    let result = listOfRestaurants;

    if (debouncedSearchText.trim()) {
      result = result.filter((res) => {
        return res?.info?.name
          .toLowerCase()
          .includes(debouncedSearchText.toLowerCase());
      });
    }

    if (ratingFilter) {
      result = result.filter((res) => res.info.avgRating >= 4.0);
    }

    return result;
  }, [listOfRestaurants, debouncedSearchText, ratingFilter]);

  const messageContainer = () => {
    return (
      <div className="msg-container">
        <h2>Sorry, No restaurants found..</h2>
      </div>
    );
  };

  if (!onlineStatus) {
    return (
      <div className="body-container flex-row justify-content-center">
        Something went wrong!, please check your internet..
      </div>
    );
  }

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
              <input
                className="search-input"
                type="search"
                name="search-res"
                id="res-search"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="rating-filter">
              <button
                className="filter-btn"
                onClick={() => setRatingFilter((prev) => !prev)}
              >
                Rating 4.0+
              </button>
            </div>
          </div>
          {filteredRestaurants.length === 0 ? (
            messageContainer()
          ) : (
            <div className="rest-cards-list-container">
              {filteredRestaurants.map((restaurant) => (
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
