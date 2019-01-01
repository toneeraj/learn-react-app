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
        <Person name="react senior learner">I am the text in between person component tag. To see me use props.children inside component</Person>
      </div>
    );
  }
}

export default App;
