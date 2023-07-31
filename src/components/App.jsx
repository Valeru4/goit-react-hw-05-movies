import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
// import Home from '../pages/Homepage/Homepage';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Homepage/Homepage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};
