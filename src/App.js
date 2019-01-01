import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, happy learning react!</h1>
        <Person />
        <Person name="react learner" />
      </div>
    );
  }
}

export default App;
