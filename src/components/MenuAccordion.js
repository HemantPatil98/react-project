import { IMG_URL } from "../utils/constant";

const MenuAccordion = (props) => {
  const { title, itemCards } = props.cardData;

  return (
    <>
      <div className="accordion">
        <h3>
          {title} ({itemCards?.length})
        </h3>
        <div>
          {itemCards.map((itemCard) => {
            const itemCardInfo = itemCard?.card?.info;
            if (Object.keys(itemCardInfo).length !== 0) {
              return (
                <div
                  className="itemCard flex-row justify-content-space-between"
                  key={itemCardInfo?.id}
                >
                  <div className="itemInfo">
                    <p className="itemName">{itemCardInfo?.name}</p>
                    <p>₹{itemCardInfo?.price / 100}</p>
                    <p>{itemCardInfo?.description}</p>
                  </div>
                  <div className="itemImg">
                    <img
                      src={IMG_URL + itemCardInfo?.imageId}
                      alt=""
                      width={100}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="accordionBorder"></div>
    </>
  );
};

export default MenuAccordion;
