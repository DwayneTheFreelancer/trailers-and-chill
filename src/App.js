import React from 'react';
import './App.css';
import Header from './components/Header';
import TopRatedContainer from './components/TopRatedContainer';
import NewReleases from './components/NewReleases';
import SearchTrailer from './components/SearchTrailer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <TopRatedContainer />
      <NewReleases />
      <SearchTrailer />
      <Footer />
    </div>
  );
}

export default App;
