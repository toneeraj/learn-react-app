import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    Persons : [
      {id : '1'},
      {id : '2', name : 'react learner'},
      {id : '3', name : 'react senior learner', text:'I am the text in between person component tag. To see me use props.children inside component'}
    ]
  };

  stateChangeHandler = (arg1, arg2) => {
    console.log('In future, this handler will change the state whenever invoked.');
    if (arg2 != null) {
      console.log('From the component where this handler was invoked, the first argument passed is "' + arg1 
      + '" and the second argument passed is "' + arg2 + '"');
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, happy learning react!</h1>
        {
          this.state.Persons.map (p => {
            if (p.name) {
              return <Person 
                        name={p.name} 
                        key={p.id} 
                        //passing method by reference which will allow access to handler method in another component. No args passed.
                        click={this.stateChangeHandler} 
                        //passing method by reference. This also passes two args which will get accessed in handler method.
                        //a random string is the first arg and the person component ID attribute is the second arg.
                        clickWithArg={this.stateChangeHandler.bind(this, 'I am the first arg', p.id)}>
                      {p.text}</Person>
            }
            return null;
          })
        }  
      </div>
    );
  }
}

export default App;
