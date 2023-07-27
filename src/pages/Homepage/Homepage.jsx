import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../components/services/API';
import { MovieList } from 'components/MovieList/MoviesList';
export const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    if (!trendingMovie) return;
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovie(data.results);
        // console.log(data.results);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending movies</h2>
      <ul>{trendingMovie && <MovieList movies={trendingMovie} />}</ul>
    </div>
  );
};
