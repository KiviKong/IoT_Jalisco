import React, { Component } from 'react';
import logo from './logo.svg';
import { Mapa } from './mapa/Mapa.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mapa size={20}/>
      </div>
    );
  }
}

export default App;
