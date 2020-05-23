import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>My Name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person

