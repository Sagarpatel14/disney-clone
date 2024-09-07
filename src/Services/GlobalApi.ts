import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const api_key = "024b54bf8fe13b1897667894bc55e16b";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=024b54bf8fe13b1897667894bc55e16b";

const getTrendingMovies = axios.get(
  baseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { getTrendingMovies, getMovieByGenreId };
