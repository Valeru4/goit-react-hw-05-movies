import { fetchMovieDetails } from 'components/services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetails, setMoviedetils] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        console.log(data);

        return data;
      } catch (error) {
        console.logg(error.mesage);
      } finally {
        setIsLoading(false);
      }
    };
  }, [movieId]);

  return (
    <div>
      {/* <h2>{title}</h2>
      <p>User score: {vote_average} </p>
      <p>Overview: {overview} </p>
      <p>Genres: {genres_id}</p> */}
    </div>
  );
};
