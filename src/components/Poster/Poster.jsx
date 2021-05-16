import React from 'react';
import './Poster.scss';

const Poster = ({ poster, title, link }) => (
  <a className='poster' href={link}>
    <div className='title'>{title}</div>
    <img src={poster} alt={title} />
  </a>
);

export default Poster;
