This contains the changes done to learn react. 


## Section - Introducing components

* Update and see the changes in default project
* Create a new Person Component and configure it as part of App.js
* props children property


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

### props children peoperty to access value passed between tags
Using {props.children} inside the component, you can access the values passed `I am the text i.....`

```javascript
    <div className="App">
        <h1>Hello, happy learning react!</h1>
        <Person />
        <Person name="react learner" />
        <Person name="react senior learner">I am the text in between person component tag. To see me use props.children inside component</Person>
      </div>
```
so, below is the excerpt from the Person.js

```javascript
 return (
    <p>I am a person component. The name attribute value passed to me is <b>{isNamePresent}</b>. 
    I can also print a value/result from a javascript function here. For e.g. {Math.random()}. Here is what is passed between the component start and end tags - <em>{props.children}</em></p>

```

**Note:** - The component above has been defined as function. THis is good practive if you don't need states, go with this. Otherwise, if my component needs to have state, then define the component using class - see `App.js` which is a component using class approach. When we define like this, we get access to special variable called `state` - see next section fro more details.

## Section - Introducing States and using javascript map function (Iteration)

Note that the component used above (Person) is function component as it doesn't have state. 

* Introducing `state` which is property - implicitly made available to a class which extends a Component. These components are called containers. There will be few of these which will be responsible for changing the state. You create a `class` which extends from `Component` to create a container kind of component.

* If a state contains an array, we will use the javascript `map` function to create a JSX component and populate it with the state values

* React/JSX expects a `key` attribute to efficiently manage updating the DOM. So, assuming an id attribute on state that is being passed to key.

```javascript

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

```

## Section - Introducing conditionals (javascript if) to render a component

* Using Javascript if to apply a condition to render a component. 
* Print / render the Person component only if it has the name attribute as non - null value.

```javascript

  render() {
    return (
      <div className="App">
        <h1>Hello, happy learning react!</h1>
        {
          this.state.Persons.map (p => {
            if (p.name) {
              return <Person name={p.name} key={p.id}>{p.text}</Person>
            }
            return null;
          })
        }  
      </div>
    );
  }

```

## Event Handlers and Passing Method References Between Components

* Handling events with methods - Simple Event Handling - e.g. onClick() event, a JavaScript function shoud be called. So, we will pass within curly braces, {} - java script function defined as a value. i.e. define a function and assign that to a variable. Then, access that variable inside the {} as event Handler function.

* Passing Method References Between Components - we want to do this to achieve the design pattern where the state change logic will be limited to certain components and other components will be relying on it to perform this logic. Hence, the passing method reference between components is necessary.


```javascript
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
          
```
now, the person component will simply access the this method reference via `props.click` or `props.clickWithArg` as applicable.

Below excerpt from the Person.js, shows how clicking the first paragraph will invoke the handler wihtout any args and clicking the 
second paragraph will invoke the handler method by passing two arguments.

```javascript
<div>
        <p onClick = {props.click}>I am first paragraph of a person component. The name attribute value passed to me is <b>{isNamePresent}</b>. 
         I can also print a value/result from a javascript function here. For e.g. {Math.random()}. 
         Here is what is passed between the component start and end tags - <em>{props.children}</em>. Now, if you click me, I will demo how to pass method references between components.</p>
        
         <p onClick = {props.clickWithArg}>I am the second paragraph of the above person component. Now, if you click me, I will demo how to pass method references between components. Also, I will pass the arguments to the handler. For instance, I pass the ID of this component as second argument.</p>
    </div>
```


## Updating state immutably on an event 

* When a state changes, React re-renders the component where the state prperty is used. So, use the setState() method provided by React, which enables it to rerender the DOM. It effectively allows REACT to select the part of the original state that got changed using setState(), and it will keep all other state untouched. Essentially, it will compare the tree to find the difference. and will render where the `props` or `state` is used. 

* State should always be changed immutably.

* Adding a text box in the person component, when we enter a text, that will trigger an onChange event,
which in turn will provide text box content access (via `event.target.value`) to the event handler method. 
As per the best practice, the event handler method - since will be updating the state - hence will be defined in the App.js (container). This method reference will be accessed in person component via `props.handler_method_name`


The handler method is defined here in the App.js
```javascript
nameChangeHandler = (event, personId) => {
    
    //Get the index/id in the array which need to be updated
    const personIndex = this.state.Persons.findIndex(
      p => {return p.id === personId });

    //Get the object at that location from the state.
    const person  = {...this.state.Persons[personIndex]}
    person.name = event.target.value;

    //replace this object in the state with the existing one.
    const persons = [...this.state.Persons];
    persons[personIndex] = person;

    this.setState( {Persons : persons} );

    console.log (event.target.value + ' ' + personIndex);
  }

```
In App.js, tHe above handler method gets passed as method reference to person component.
```javascript
 //using anonymous function and not binding here
                        change={(event) => this.nameChangeHandler(event, p.id)}>
```

In Person.js, person component will access / invoke this function onChange event via accessing props.

```javascript

 <input type="text" onChange = {props.change} value = {props.name} />

```

When you now access `npm start` and the app at `http://localhost:3000`, you will see the text has changed.