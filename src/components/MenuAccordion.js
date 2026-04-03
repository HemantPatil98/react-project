import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { addItems, removeItem } from "../store/cartSlice";
import { useEffect, useState } from "react";
const MenuAccordion = ({ cardData, showMenuList, setShowMenuIndex }) => {
  const { title, itemCards } = cardData;
  const [menuItems, setMenuItems] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (Array.isArray(itemCards) && itemCards.length !== 0) {
      setMenuItems(itemCards);
    }
  }, [itemCards]);

  return (
    <>
      {menuItems?.length !== 0 && (
        <div>
          <div
            className="flex flex-row justify-between pb-6 cursor-pointer"
            onClick={() => setShowMenuIndex()}
          >
            <h3 className="font-bold">
              {title} ({menuItems?.length})
            </h3>
            {showMenuList ? <ExpandLess /> : <ExpandMore />}
          </div>
          {showMenuList && (
            <div>
              {menuItems.map((item, index) => {
                const itemInfo = item?.card?.info;
                if (!itemInfo) return null;

                const cartItem = cartItems.find((ci) => ci.id === itemInfo.id);
                const qty = cartItem?.itemCount || 0;

                return (
                  <div
                    className="px-3 pt-3 pb-10 border-b border-gray-300 flex flex-row justify-between"
                    key={itemInfo?.id}
                  >
                    <div className="w-10/12">
                      <p className="text-lg font-bold pb-2">{itemInfo?.name}</p>
                      <p className="pb-2 font-bold text-sm">
                        ₹{itemInfo?.price / 100}
                      </p>
                      <p className="text-wrap pb-2 text-sm">
                        {itemInfo?.description}
                      </p>
                    </div>
                    <div className="w-2/12 relative">
                      <img
                        src={IMG_URL + itemInfo?.imageId}
                        alt=""
                        className="border border-none rounded-lg"
                      />
                      {qty > 0 ? (
                        <div className="flex flex-row w-20 p-2 bg-white text-lime-600 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold absolute top-18 left-5.5">
                          <button
                            className="w-5"
                            onClick={() => {
                              dispatch(removeItem(itemInfo));
                            }}
                          >
                            {" "}
                            -{" "}
                          </button>
                          <div className="w-6 text-center">
                            {cartItems[index]?.itemCount}
                          </div>
                          <button
                            className="w-5"
                            onClick={() => {
                              dispatch(addItems(itemInfo));
                            }}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      ) : (
                        <button
                          className="w-20 p-2 bg-white text-lime-600 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold absolute top-18 left-5.5"
                          onClick={() => {
                            dispatch(addItems(item?.card?.info));
                          }}
                        >
                          ADD
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div className="h-5 mb-6 border border-none rounded-md bg-gray-200"></div>
    </>
  );
};

export default MenuAccordion;
