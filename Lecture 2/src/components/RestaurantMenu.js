import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestarantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestarantMenu(resId);

  if (menuData === null) return <Shimmer />;

  const { name, cuisines } = menuData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>Cuisines: {cuisines.join(", ")}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((card, i) => (
            <div key={card.card.info.id}>
              <li>{card?.card?.info.name}</li>
              <p>
                {" "}
                ₹
                {card?.card?.info?.defaultPrice / 100 ||
                  card?.card?.info?.price / 100}
              </p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
