import React from 'react';
import './App.css';
import Header from './components/Header';
// import Homepage from './components/Homepage';
// import Blog from './components/Blog';
import Footer from './components/Footer';
import AppContainer from './components/AppContainer';
// import ResultsDetail from './components/ResultsDetail';
// import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Header />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;
