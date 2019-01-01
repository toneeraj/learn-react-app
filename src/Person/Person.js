import React from 'react';
//This is a component defined as a JS function.
//It can have a reference to its own css here. 
//This will be accessed inside the App.js which is ROOT in our case.
//This should always return a React DOM. <p> tag used is from React library.

import './Person.css';

const person = (props) => {
    let isNamePresent = '';
    if (props.name == null) {
        isNamePresent = 'Sorry, name was not passed to the component.'; 
        console.log('Sorry, name was not passed to the component.'); 
    } else {
        isNamePresent = props.name;
    }
    return (
    <div className="Person">
        <p onClick = {props.click}>I am first paragraph of a person component. The name attribute value passed to me is <b>{isNamePresent}</b>. 
         I can also print a value/result from a javascript function here. For e.g. {Math.random()}. 
         Here is what is passed between the component start and end tags - <em>{props.children}</em>. Now, if you click me, I will demo how to pass method references between components.</p>
        
         <p onClick = {props.clickWithArg}>I am the second paragraph of the above person component. 
         Now, if you click me, I will demo how to pass method references between components. 
         Also, I will pass the arguments to the handler.
         For instance, I pass the ID of this component as second argument.</p>

         <input type="text" onChange = {props.change} value = {props.name} />
    </div>
    );
}

export default person;