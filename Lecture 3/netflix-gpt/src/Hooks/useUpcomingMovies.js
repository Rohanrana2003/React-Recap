/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/Redux/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useUpcomingMovies;
