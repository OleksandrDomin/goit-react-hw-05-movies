import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8afe3f7ce656145ebc0e0dc4677db87a';

const movieAPI = axios.create({ baseURL: BASE_URL });

export const fetchTrendingMovies = async () => {
  const response = await movieAPI.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response;
};

export const fetchMovieDetails = async movieId => {
  const response = await movieAPI.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response;
};

export const fetchMovieCast = async movieId => {
  const response = await movieAPI.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response;
};

export const fetchMovieReviews = async movieId => {
  const response = await movieAPI.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response;
};

export const fetchMoviesByQuery = async query => {
  const response = await movieAPI.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return response;
};
