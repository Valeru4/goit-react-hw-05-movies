import { fetchMovieCredits } from 'components/services/API';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CastItem, CastList, Image, StyledLink, Text } from './Cast.styled';

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {cast && (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <Image
                src={
                  actor.profile_path === null
                    ? `https://www.vecteezy.com/vector-art/26288012-no-photo-icon-in-trendy-flat-style-isolated-on-black-background-vector-illustration`
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
      <StyledLink>
        <Link to={backLinkHref.current}>Go back</Link>
      </StyledLink>
    </div>
  );
};

export default Cast;
