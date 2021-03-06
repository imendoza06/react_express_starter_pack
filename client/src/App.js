import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from "./Components/Books/Books";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Books</h1>
        </header>
        <Books />
      </div>
    );
  }
}

export default App;
