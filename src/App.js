import React, { Component } from 'react';
import logo from './share.png';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign up Form AirGarage</h1>
        </header>
        <Form> </Form>
            
            <div id="logorun">
            <img src={logo} className="App-drive" alt="logo" />
            </div>
      </div>
    );
  }
}

export default App;
