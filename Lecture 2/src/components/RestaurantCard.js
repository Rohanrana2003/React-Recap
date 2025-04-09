const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRatingString, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
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

export default RestaurantCard;
