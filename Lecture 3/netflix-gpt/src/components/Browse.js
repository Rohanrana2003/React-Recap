import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
