import { useState } from 'react';
import { fetchSearchMovies } from 'components/services/API';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchQuery = searchParams.get('query');
  //   console.log(searchQuery);

  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchMovies(searchQuery);
        console.log(data);

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};