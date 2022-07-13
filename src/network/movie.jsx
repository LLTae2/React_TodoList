import axios from "axios";

export const GetMovieList = (s) => axios.get(`https://fake-movie-database-api.herokuapp.com/api?s=${s}`);
