import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol className={css.movieList}>
      {movies.map(({ id, title, name }) => (
        <li className={css.movieListItem} key={id}>
          <Link
            className={css.movieListLink}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title ? title : name}
          </Link>
        </li>
      ))}
    </ol>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
