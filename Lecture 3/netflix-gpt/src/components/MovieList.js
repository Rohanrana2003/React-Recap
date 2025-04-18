import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div className="pl-10 ">
      <h1 className="text-white text-[40px] font-semibold pb-3">{title}</h1>

      <div className="flex overflow-x-auto whitespace-nowrap mb-10">
        <div className="flex items-center gap-5">
          {movie?.map((movie) => (
            <MovieCard key={movie.backdrop_path} id={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
