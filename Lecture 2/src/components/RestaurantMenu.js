import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setMenuData(json.data);
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
  };

  if (menuData === null) return <Shimmer />;

  // console.log(menuData?.data?.cards[2]?.card?.card?.info.name);
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
