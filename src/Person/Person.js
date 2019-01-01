import React from 'react';
//This is a component defined as a JS function.
//It can have a reference to its own css here. 
//This will be accessed inside the App.js which is ROOT in our case.
//This should always return a React DOM. <p> tag used is from React library.

const person = (props) => {
    let isNamePresent = '';
    if (props.name == null) {
        isNamePresent = 'Sorry, nothing was passed to me.'; 
    } else {
        isNamePresent = props.name;
    }
    return (
    <p>I am a person component. The name attribute value passed to me is <b>{isNamePresent}</b>. 
    I can also print a value/result from a javascript function here. For e.g. {Math.random()}. Here is what is passed between the component start and end tags - <em>{props.children}</em></p>

    );
}

export default person;