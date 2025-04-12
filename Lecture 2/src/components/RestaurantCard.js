import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRatingString, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt="res-image"
        />
      </div>
      <h3>{name}</h3>
      <p className="cuisines">{cuisines.join(", ")}</p>
      <p>{avgRatingString}</p>
      <p>{sla?.deliveryTime} minutes</p>
    </div>
  );
};

export const isOpen = (RestaurantCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label>Opened</label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};

export default RestaurantCard;
