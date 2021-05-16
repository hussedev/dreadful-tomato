import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './_Movies.scss';
import MovieList from '../../components/MovieList';

const Movies = ({ title, movies }) => (
  <div className='movies-container'>
    <div className='navbar-container'>
      <Navbar currentPage='/movies' />
    </div>
    <div className='movies'>
      <div className='dashboard-container'>
        <h1>{title}</h1>
        {title === 'Popular Movies' && movies.length > 0 && (
          <div className='rows-container'>
            <MovieList movies={movies.slice(0, 5)} />
            <MovieList movies={movies.slice(5, 10)} />
          </div>
        )}
        {title === 'Popular Series' && movies.length > 0 && (
          <div className='rows-container'>
            <MovieList movies={movies.slice(0, 5)} />
            <MovieList movies={movies.slice(5, 10)} />
          </div>
        )}
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  </div>
);

export default Movies;
