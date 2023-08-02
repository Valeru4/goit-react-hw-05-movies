import { fetchMovieDetails } from 'components/services/API';
import { useEffect, useRef, useState } from 'react';
import { useParams, Routes, Route, useLocation } from 'react-router-dom';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import {
  Genre,
  Image,
  MovieTitleOverview,
  Section,
  StyledAddLink,
  StyledLink,
  SubTitle,
  Text,
  Title,
  TitleGenres,
  Wrapper,
  WrapperAdditionalLink,
  WrapperImage,
  WrapperText,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

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

  const genresList = movieDetails?.genres.map(({ name }) => name).join(', ');

  return (
    <>
      <div>
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        {movieDetails && (
          <Section>
            {/* <StyledLink> */}
            <StyledLink to={backLinkHref.current}>Go back</StyledLink>
            {/* </StyledLink> */}

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

                <Genre> {genresList} </Genre>
              </WrapperText>
            </Wrapper>

            <SubTitle> Additional information</SubTitle>
            <WrapperAdditionalLink>
              <StyledAddLink state={{ from: location }} to="Cast">
                Cast
              </StyledAddLink>
              <StyledAddLink state={{ from: location }} to="Reviews">
                Review
              </StyledAddLink>
            </WrapperAdditionalLink>
          </Section>
        )}
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MovieDetails;
