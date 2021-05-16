import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Movies from './containers/Movies';
import { getMockedData as getData } from './Services/ApiClient';
import './App.scss';

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

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movies'>
            <Movies title='Popular Movies' movies={movies} />
          </Route>
          <Route exact path='/series'>
            <Movies title='Popular Series' movies={series} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
