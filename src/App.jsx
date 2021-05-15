import React, { useState, useEffect } from 'react';
import { getMockedData as getData } from './Services/ApiClient';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      if (data) {
        setMovies(
          data.entries.filter((entry) => entry.programType === 'movie')
        );
        setSeries(
          data.entries.filter((entry) => entry.programType === 'series')
        );
      }
    });
  }, []);

  return <div className='app'></div>;
};

export default App;
