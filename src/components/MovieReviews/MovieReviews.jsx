import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/movie-api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ data }) => {
        const reviews = data.results;
        setMovieReviews(reviews);
      })
      .catch(error => toast.error(error.message));
  }, [movieId]);

  return (
    <>
      {movieReviews.length === 0 ? (
        <h3>We don't have any reviews for this movie.</h3>
      ) : (
        <ul className={css.movieReviewsList}>
          {movieReviews.map(({ id, author, content }) => (
            <li className={css.movieReviewsListItem} key={id}>
              <h3>{`Author: ${author}`}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
