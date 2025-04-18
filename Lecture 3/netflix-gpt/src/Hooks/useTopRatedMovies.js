/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/Redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useTopRatedMovies;
