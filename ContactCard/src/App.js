import React, { Component } from 'react';
import './App.css';
import Contact from './ContactCard.js';

class App extends Component {

  render() {
    return (
      <div className="card">
      <Contact></Contact>
      </div>
    );
  }
}

export default App;
