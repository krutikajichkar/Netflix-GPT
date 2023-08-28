import { useEffect } from "react";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTopRatedMovies(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
