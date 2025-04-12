import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestarantMenu from "../utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestarantMenu(resId);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (menuData === null) return <Shimmer />;

  const { name, cuisines } = menuData?.cards[2]?.card?.card?.info;
  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu flex flex-col justify-center items-center gap-6 p-10">
      <h1 className="text-5xl font-bold ">{name}</h1>
      <p className="text-2xl font-normal">
        <span className="font-bold">Cuisines</span>: {cuisines.join(", ")}
      </p>

      <h2 className="mt-10 text-4xl font-semibold">Menu</h2>

      {/* Menu - Categories  */}
      {categories.map((category, index) => (
        <MenuCategories
          index={index}
          key={category.card.card.categoryId}
          category={category}
          showMenuItems={index === selectedIndex ? true : false}
          setShowItem={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
