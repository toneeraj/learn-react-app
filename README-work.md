This contains the changes done to learn react. 


## Section - Initial Learning

* Update and see the changes in default project
* Create a new Person Component and configure it as part of App.js


### Update and see the changes in default project

In App.js, just updated the below lines and now when you access 

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, happy learning react!</h1>
      </div>
    );
  }
}
```

### Create a new Person Component
This is a component defined as a JS function. This should always return a React DOM. 
`<p>` tag used is from React library. React automatically passes the values of attributes to props.
props is the convention, so using it for readability otherwise, any other value is also possible.
Inside the `{}`, either we use props.`<name_of_attribute>` or the result of executing javascript function.

```javascript
import React from 'react';
const person = (props) => {
    let isNamePresent = '';
    if (props.name == null) {
        isNamePresent = 'Sorry, nothing was passed to me.'; 
    } else {
        isNamePresent = props.name;
    }
    return (
    <p>I am a person component. The name attribute value passed to me is <b>{isNamePresent}</b>. 
    I can also print a value/result from a javascript function here. For e.g. {Math.random()} </p>
    );
}

export default person;

```

The above component can be accessed in App.js. Note that it has been invoked two times below.
Firstly, without passing any *name* attribute. Secondly, with a value for **name** attribute.

```javascript
    <div className="App">
        <h1>Hello, happy learning react!</h1>
        <Person />
        <Person name="react learner" />
      </div>
```

When you now access `npm start` and the app at `http://localhost:3000`, you will see the text has changed.