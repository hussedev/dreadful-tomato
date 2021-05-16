import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Poster from '../../components/Poster';
import moviesPoster from '../../assets/movies.png';
import seriesPoster from '../../assets/series.png';
import './Home.scss';

const Home = () => (
  <div className='home-container'>
    <div className='navbar-container'>
      <Navbar currentPage='/' />
    </div>
    <div className='home'>
      <div className='content-container'>
        <Poster poster={moviesPoster} title='Movies' link='/movies'></Poster>
        <Poster poster={seriesPoster} title='Series' link='/series'></Poster>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
