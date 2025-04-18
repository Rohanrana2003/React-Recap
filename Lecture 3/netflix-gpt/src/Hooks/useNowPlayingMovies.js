import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useNowPlayingMovies;
