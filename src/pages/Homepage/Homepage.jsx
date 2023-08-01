import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../components/services/API';
import MovieList from 'components/MovieList/MoviesList';
import { Title, Wrapper } from './Homepage.styled';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
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
    <Wrapper>
      <Title>Trending movies</Title>
      {trendingMovie && <MovieList movies={trendingMovie} />}
    </Wrapper>
  );
};

export default Home;
