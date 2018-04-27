import React, { Component } from 'react';
import logo from './logo.svg';
import { Mapa } from './components/Mapa.js';
import { Information } from './components/Information.js';
import { Description } from './components/Description.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gridScreen">
          <Mapa />
          <Description />
          <Information />
        </div>
      </div>
    );
  }
}

export default App;
