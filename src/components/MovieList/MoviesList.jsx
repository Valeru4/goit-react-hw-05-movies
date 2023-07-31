import { Link, useLocation } from 'react-router-dom';
import { MoviesList } from './MoviesList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </MoviesList>
  );
};
