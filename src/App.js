import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Header from './components/header';
import Cards from './components/cards';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Appbar>
        <Header />
      </Appbar>
      <Cards />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

