import { fetchMovieDetails } from 'components/services/API';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import {
  Image,
  MovieTitleOverview,
  StyledLink,
  Text,
  Title,
  TitleGenres,
  Wrapper,
  WrapperImage,
  WrapperText,
} from './MovieDetails.styled';

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
            <StyledLink>
              <Link to={backLinkHref.current}>Go back</Link>
            </StyledLink>

            <Wrapper>
              <WrapperImage>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  alt={movieDetails.original_title}
                />
                <Title>{movieDetails.title}</Title>
              </WrapperImage>
              <WrapperText>
                <Text>User score: {movieDetails.vote_average}</Text>
                <MovieTitleOverview>Overview</MovieTitleOverview>
                <Text>{movieDetails.overview}</Text>
                <TitleGenres>Genres:</TitleGenres>
                {movieDetails.genres.map(genre => genre.name).join(', ')}
              </WrapperText>
            </Wrapper>
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
