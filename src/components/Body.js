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

  const { data, loading, error } = useFetch(RESTAURANT_LIST_URL);
  //Custom Hook
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
    <div className="body-container flex flex-row justify-content-center w-[1260px]">
      {loading ? (
        <Shimmer />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div className="w-full flex flex-row content-start items-center gap-10 pb-10">
            <div>
              <input
                data-testid="search-input"
                className="w-sm p-2 mr-2 border border-gray-300 rounded-md text-sm leading-6"
                type="text"
                placeholder="Search"
                name="search-res"
                id="res-search"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div>
              <button
                data-testid="rating-filter"
                className="w-fit mr-2 p-2 text-white bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-md cursor-pointer font-bold"
                onClick={() => setRatingFilter((prev) => !prev)}
              >
                Rating 4.0+
              </button>
            </div>
          </div>
          {filteredRestaurants.length === 0 ? (
            messageContainer()
          ) : (
            <div className="mx-auto flex flex-row space-y-6 flex-wrap">
              {filteredRestaurants.map((restaurant) => (
                <Link
                  key={restaurant?.info?.id}
                  to={"restaurant/" + restaurant?.info?.id}
                  className="basis-1/4"
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
