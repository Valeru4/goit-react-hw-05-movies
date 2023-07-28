import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b5be8a81b67f23805c0e9d62a063210c';
const TRENDIGMOVIES = '/trending/movie/day';
const SEARCHMOVIES = '/search/movie';
const MOVIECREDITS = '/movie/movie_id/credits';
const MOVIEREVIEWS = 'movies/get-movie-reviews';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${URL}${TRENDIGMOVIES}?api_key=${API_KEY}`);
  //   console.log(response);
  return response.data;
};

export const fetchSearchMovies = async searchQuery => {
  const response = await axios.get(
    `${URL}${SEARCHMOVIES}?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
