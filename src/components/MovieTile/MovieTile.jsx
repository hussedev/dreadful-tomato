import React from 'react';
import calendarIcon from '../../assets/calendar-icon.svg';
import './MovieTile.scss';

const MovieTile = ({ movie }) => {
  return (
    <div className='movie'>
      <img src={movie.images['Poster Art'].url} alt={movie.title} />
      <div className='title'>
        <h1>{movie.title}</h1>
      </div>
      <div className='info'>
        <h1>{movie.title}</h1>
        <div className='year'>
          <img src={calendarIcon} alt='' />
          <h2>{movie.releaseYear}</h2>
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieTile;
