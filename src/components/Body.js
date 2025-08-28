import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="rest-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
