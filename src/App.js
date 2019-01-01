import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    Persons : [
      {id : '1'},
      {id : '2', name : 'react learner'},
      {id : '3', name : 'react senior slearner', text:'I am the text in between person component tag. To see me use props.children inside component'}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, happy learning react!</h1>
        {
          this.state.Persons.map (p => {return <Person name={p.name} key={p.id}>{p.text}</Person>})
        }  
      </div>
    );
  }
}

export default App;
