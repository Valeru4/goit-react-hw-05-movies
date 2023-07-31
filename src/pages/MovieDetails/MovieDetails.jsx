import { fetchMovieDetails } from 'components/services/API';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import  Cast  from 'pages/Cast/Cast';
import  Reviews  from 'pages/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMovieDetails(movieId);
        // console.log(data);
        setMovieDetails(data);
      } catch (error) {
        // console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {movieDetails && (
          <section>
            <Link to={backLinkHref.current}>Go back</Link>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
            <h1>{movieDetails.title}</h1>
            <p> User score: {movieDetails.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres:</h3>
            {movieDetails.genres.map(genre => genre.name).join(', ')}
          </section>
        )}

        <section>
          <h2> Additional information</h2>
          <Link state={{ from: location }} to="Cast">
            Cast
          </Link>
          <Link state={{ from: location }} to="Reviews">
            Review
          </Link>
        </section>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};


export default MovieDetails;