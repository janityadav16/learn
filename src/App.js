import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Header from './components/header';
import Cards from './components/cards';
import Gallery from './components/gallery';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Appbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Appbar>
      <Header>

      </Header>
      <Cards>

      </Cards>
      <Gallery>

      </Gallery>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;

