import PropTypes from 'prop-types';
import { formatDateToYear } from 'services/format-date';
import defaultPoster from './../../images/no-poster-available.jpg';
import css from './MovieInfo.module.css';

export const MovieInfo = ({ movie }) => {
  const { title, genres, poster_path, overview, release_date, vote_average } =
    movie;

  const countUserScorePercentage = score => {
    const userScore = Number(score);
    return Math.round((userScore * 100) / 10);
  };

  const releaseYear = formatDateToYear(release_date);
  const userScorePercentage = countUserScorePercentage(vote_average);

  return (
    <div className={css.movieDescWrapper}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${defaultPoster}`
        }
        alt={title}
        width="300"
      />
      <div className={css.movieInfo}>
        <h1>{`${title} (${releaseYear})`}</h1>
        <p>{`User score: ${userScorePercentage}%`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={css.movieGenresList}>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }).isRequired
    ).isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
