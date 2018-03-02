import React, { Component } from 'react';
import logo from './share.png';
import './App.css';
import Form from './Form';
import Form2 from './Form2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sign up Form AirGarage</h1>
        </header>
        <Form> </Form>
        <div id="logorun">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Form2> </Form2>
      </div>
    );
  }
}

export default App;
