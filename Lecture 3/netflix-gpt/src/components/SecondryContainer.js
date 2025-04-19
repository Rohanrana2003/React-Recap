import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondryContainer = () => {
  const movie = useSelector((store) => store.movies);

  return (
    movie &&
    movie.nowPlayingMovies &&
    movie.upcomingMovies &&
    movie.topRatedMovies &&
    movie.popularMovies && (
      <div className="bg-black pb-20 ">
        <div className="relative -mt-56">
          <MovieList title="Now Playing" movie={movie.nowPlayingMovies} />
          <MovieList title="Upcoming Movies" movie={movie.upcomingMovies} />
          <MovieList title="Top Rated Movies" movie={movie.topRatedMovies} />
          <MovieList title="Popular Movies" movie={movie.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
