import { fetchMovieCredits } from 'components/services/API';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CastItem, CastList, Image, StyledLink, Text } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMovieCredits(movieId);
        console.log(data.cast);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      {cast && (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <Image
                src={
                  actor.profile_path === null
                    ? `https://fakeimg.pl/300x400?text=No+image&font=bebas`
                    : `https://image.tmdb.org/t/p/w154/${actor.profile_path}`
                }
                alt={actor.name}
              />
              <Text>{actor.name}</Text>
              <Text>Character: {actor.character}</Text>
            </CastItem>
          ))}
        </CastList>
      )}

      <StyledLink to={backLinkHref.current}>Go back</StyledLink>
    </div>
  );
};

export default Cast;
