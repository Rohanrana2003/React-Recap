import { useEffect, useState } from "react";
import { DATA_URL, resData } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterRestaurants = () => {
    setListOfRestaurants((listOfRestaurants) =>
      listOfRestaurants.filter((item) => item.info.avgRating > 4.3)
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurants}>
          {" "}
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
