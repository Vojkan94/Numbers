import React, { Component } from 'react';
import './App.css';
import Home from './View/components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Home/>
      </div>
    );
  }
}

export default App;
