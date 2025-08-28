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
    <div className="rest-card-container">
      <div className="rest-card">
        <img src={IMG_URL + cloudinaryImageId} alt="" />
        <div className="dish-detail">
          <p className="rest-name">{name}</p>
          <p className="rest-type">{cuisines.join(", ")}</p>
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
