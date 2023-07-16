import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/movie-api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { CgArrowLeft } from 'react-icons/cg';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const links = [
    { path: 'cast', title: 'Cast' },
    { path: 'reviews', title: 'Reviews' },
  ];

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const locationRef = useRef(location?.state?.from);

  const backLinkLocation = locationRef?.current || '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => {
        const movieInfo = response.data;
        setMovie(movieInfo);
      })
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <button className={css.goBackBtn} type="button">
        <Link className={css.goBackBtnLink} to={backLinkLocation}>
          <CgArrowLeft />
          <span className={css.goBackBtnText}>Go back</span>
        </Link>
      </button>
      <MovieInfo movie={movie} />
      <h3 className={css.title}>Additional information</h3>
      <ul className={css.detailsList}>
        {links.map(({ path, title }) => (
          <li className={css.detailsListItem} key={path}>
            <Link className={css.detailsListLink} to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
