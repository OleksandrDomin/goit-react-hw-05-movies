import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchMoviesByQuery } from 'services/movie-api';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;

    fetchMoviesByQuery(query)
      .then(({ data }) => {
        const searchResults = data.results;
        setMovies(searchResults);
      })
      .catch(error => toast.error(error.message));
  }, [searchParams]);

  const handleSearchFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <SearchForm onSubmit={handleSearchFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
