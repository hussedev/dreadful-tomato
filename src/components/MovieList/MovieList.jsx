import React from 'react';
import MovieTile from '../MovieTile';
import './MovieList.scss';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 && (
        <div className='list'>
          {movies.map((movie) => (
            <MovieTile key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
