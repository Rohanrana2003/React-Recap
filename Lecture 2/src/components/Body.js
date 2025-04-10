import { useEffect, useState } from "react";
import { DATA_URL, resData } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfRestaurantsClone, setListOfRestaurantsClone] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [authName, setAuthName] = useState("Login");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurantsClone(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterRestaurants = () => {
    setListOfRestaurants((listOfRestaurants) =>
      listOfRestaurants.filter((item) => item.info.avgRating > 4.3)
    );
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);

    setListOfRestaurantsClone(
      listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="body">
      <div className="body-functions">
        <div className="search">
          <input
            type="search"
            onChange={handleSearch}
            value={searchText}
            placeholder="Search Restaurants"
          ></input>
        </div>

        <div className="filter">
          <button className="filter-btn" onClick={filterRestaurants}>
            {" "}
            Top Rated Restaurants
          </button>

          <button
            className="login-btn"
            onClick={() =>
              authName === "Login"
                ? setAuthName("Logout")
                : setAuthName("Login")
            }
          >
            {authName}
          </button>
        </div>
      </div>

      {listOfRestaurantsClone.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {listOfRestaurantsClone?.map((item) => (
            <RestaurantCard key={item.info.id} resData={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
