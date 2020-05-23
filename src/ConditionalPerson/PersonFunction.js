import React from 'react';

const PersonFunction = (props) => {
    return (
        <div>
            <p>Hello I am {props.name}. I am {props.age} years old. <span style={{ cursor: "pointer" }} onClick={props.click}>Delete this.</span></p>
            <input type="text" onChange={props.change} />
        </div>
    )
}

export default PersonFunction