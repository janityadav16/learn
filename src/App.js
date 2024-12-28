import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Header />
      <Cards />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

