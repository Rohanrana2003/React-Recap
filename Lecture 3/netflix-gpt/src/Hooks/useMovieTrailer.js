import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );
    const data = await response.json();
    const trailers = data.results?.filter((item) => item.type === "Trailer");
    const trailer = trailers[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useMovieTrailer;
