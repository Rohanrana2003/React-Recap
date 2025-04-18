/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/Redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default usePopularMovies;
