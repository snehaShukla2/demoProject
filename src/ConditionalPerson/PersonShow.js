import React, { Component } from 'react';
import PersonFunction from './PersonFunction'

class PersonShow extends Component {
    state = {
        person: [
            { id: 1, name: 'abc', age: 28 },
            { id: 2, name: 'xyz', age: 26 },
            { id:3, name: 'my name', age: 20 }
        ],
        showPerson: false
    }

    togglePerson = () => {
        const currentValue = this.state.showPerson
        this.setState({
            showPerson: (!currentValue)
        })
    }

    deletePerson = (personIndex) => {
        //const currentPerson = this.state.person; //chnage into original state
        //const currentPerson = this.state.person.slice(); //make copy of original state
        const currentPerson = [...this.state.person];
        currentPerson.splice(personIndex, 1);
        this.setState({
            person: currentPerson
        })
    }

    changePerson = (event, id) => {
        const personIndex = this.state.person.findIndex((p) => {
            debugger;
            return (
                p.id === id
            )
        });

        const changedPerson = {
            ...this.state.person[personIndex]
        }

        changedPerson.name = event.target.value;

        const person = [...this.state.person];
        person[personIndex] = changedPerson;

        this.setState({person:person})
    }

    render() {

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.person.map((p, index) => {
                        return (
                            <PersonFunction
                                click={() => this.deletePerson(index)}
                                name={p.name}
                                age={p.age}
                                key={p.id}
                                change={(event) => this.changePerson(event, p.id)} />
                        )
                    })}
                </div>
            )
        }

        return (
            <div>
                <button onClick={this.togglePerson}>Show-Hide Person</button>
                {persons}
            </div>
        )
    }
}

export default PersonShow