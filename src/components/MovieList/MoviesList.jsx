import { Link, useLocation } from 'react-router-dom';
import { MoviesList, MovieItem } from './MoviesList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <Link state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </MovieItem>
      ))}
    </MoviesList>
  );
};

export default MovieList;
