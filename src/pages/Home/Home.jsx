import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from 'services/movie-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ data }) => {
        const trendingMovies = data.results;
        setMovies(trendingMovies);
      })
      .catch(error => toast.error(error.message));
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
