import React from "react";
import MenuItems from "./MenuItems";

const MenuCategories = ({ category, showMenuItems, setShowItem }) => {
  const { title, itemCards } = category.card.card;
  return (
    <div className="min-w-2xl">
      <div className="text-2xl text-white rounded-md font-bold flex justify-between bg-red-700 py-2 px-5 shadow-md shadow-black">
        <h1>{title}</h1>
        <button
          className={`cursor-pointer transition-all duration-300 ${
            !showMenuItems ? "rotate-180" : ""
          }`}
          onClick={setShowItem}
        >
          ↓
        </button>
      </div>

      {showMenuItems && <MenuItems itemCards={itemCards} />}
    </div>
  );
};

export default MenuCategories;
