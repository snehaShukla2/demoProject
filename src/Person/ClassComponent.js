import React, { Component } from 'react';
import Person from './FunctionComponent'

class PersonDetails extends Component {
    state = {
        person: [
            { name: "Person 1", age: 28 },
            { name: "Person 2", age: 29 },
            { name: "Person 3", age: 24 }
        ]
    }

    switchButtonHandler = () => {
        this.setState({
            person: [
                { name: "Person abc", age: 28 },
                { name: "Person 2", age: 29 },
                { name: "Person 3", age: 24 }
            ]
        })
    }

    nameChangedHandler = (e) => {
        this.setState({
            person: [
                { name: "Person 1", age: 28 },
                { name: e.target.value, age: 29 },
                { name: "Person 3", age: 24 }
            ]
        })
    }

    render() {
        return (
            <div>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age} />
                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                    change={this.nameChangedHandler}>My Hobbies: Travelling</Person>
                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age}
                    click={this.switchButtonHandler} />
                <button onClick={this.switchButtonHandler}>Switch Button</button>
            </div>
        )
    }
}

export default PersonDetails