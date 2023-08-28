import { useEffect } from "react";
import {  addPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovies(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
   getPopularMovies();
  }, []);
};

export default usePopularMovies;
