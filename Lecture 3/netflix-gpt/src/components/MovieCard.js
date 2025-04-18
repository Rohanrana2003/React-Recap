import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ id }) => {
  return (
    <div className="w-64">
      <img src={IMG_CDN + id} alt="moviecard" />
    </div>
  );
};

export default MovieCard;
