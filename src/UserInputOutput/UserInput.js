import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
    )
}

export default UserInput