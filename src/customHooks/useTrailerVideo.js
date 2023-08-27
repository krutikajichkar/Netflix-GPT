import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const filteredData = response.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filteredData.length
          ? filteredData[0]
          : response.results[0];

        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
