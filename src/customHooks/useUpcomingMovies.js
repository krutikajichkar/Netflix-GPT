import { useEffect } from "react";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addUpcomingMovies(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
