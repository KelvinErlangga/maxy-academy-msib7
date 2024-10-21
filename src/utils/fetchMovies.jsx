import axios from "./axios";

export const getMovieList = async () => {
  const response = await axios.get("/movie/popular");
  return response.data.results;
};

export const nowPlayingMovie = async () => {
  const response = await axios.get("/movie/now_playing");
  return response.data.results;
};

export const topRatedMovie = async () => {
  const response = await axios.get("/movie/top_rated");
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const upcomingMovie = async () => {
  const response = await axios.get("/movie/upcoming");
  return response.data.results;
};
