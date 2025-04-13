import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({ itemCards }) => {
  const dispatch = useDispatch();

  const addCartItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="item-list px-2 ">
      {itemCards.map((item, index) => (
        <div
          key={index}
          className=" border rounded-lg pl-10 pr-4 py-4 my-5 flex justify-between items-center font-semibold bg-gray-200 hover:bg-gray-50"
        >
          <p>{item.card.info.name}</p>
          <div className="flex justify-between items-center gap-6 ">
            ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            <button
              onClick={() => addCartItems(item)}
              className="text-white bg-black py-2 px-4 rounded-lg cursor-pointer"
            >
              Add +{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
