import { IMG_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = props?.restData?.info;
  return (
    <div>
      <div data-testid="resCard" className="w-72">
        <div>
          <img
            className="w-72 h-60 rounded-2xl"
            src={IMG_URL + cloudinaryImageId}
            alt="restaurant image"
          />
        </div>
        <div className="dish-detail">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-wrap">{cuisines.join(", ")}</p>
        </div>
        <div className="rating-details">
          <div className="rating">
            <p className="rating-num">⭐️ {avgRatingString}</p>
          </div>
          <div className="duration">{sla?.deliveryTime} Mins</div>
          <div className="price">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
