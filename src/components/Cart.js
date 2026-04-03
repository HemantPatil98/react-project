import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { clearCart, removeItem, addItems } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="max-w-3xl w-3xl mx-auto flex flex-col">
      <div>
        <div className="pb-5 font-bold text-2xl" data-testid="cartHeading">
          Cart
        </div>
        <div>
          {cartItems.map((item) => {
            return (
              <div
                className="px-3 pt-3 pb-10 border-b border-gray-300 flex flex-row justify-between"
                key={item?.id}
                data-testid="cartItem"
              >
                <div className="w-10/12">
                  <p className="text-lg font-bold pb-2">{item?.name}</p>
                  <p className="pb-2 font-bold text-sm">₹{item?.price / 100}</p>
                  <p className="text-wrap pb-2 text-sm">{item?.description}</p>
                </div>
                <div className="w-2/12 relative">
                  <img
                    src={IMG_URL + item?.imageId}
                    alt=""
                    className="border border-none rounded-lg"
                  />
                  {item.hasOwnProperty("itemCount") &&
                    item?.itemCount !== 0 && (
                      <div className="flex flex-row w-20 p-2 bg-white text-lime-600 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold absolute top-18 left-5.5">
                        <button
                          className="w-5"
                          onClick={() => {
                            dispatch(removeItem(item));
                          }}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <div className="w-6 text-center">{item?.itemCount}</div>
                        <button
                          className="w-5"
                          onClick={() => {
                            dispatch(addItems(item));
                          }}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
        {cartItems.length !== 0 ? (
          <button
            className="w-full mt-5 p-2 bg-white text-red-600 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer font-bold"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        ) : (
          <h1 className="font-bold text-xl text-gray-500">
            Cart is empty, please add some items
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
