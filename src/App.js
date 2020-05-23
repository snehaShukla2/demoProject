import React, {Component} from 'react';
import './App.css';
//import PersonDetails from './Person/ClassComponent'
//import UserOutput from './UserInputOutput/UserOutput'
//import UserInput from './UserInputOutput/UserInput';
import PersonShow from './ConditionalPerson/PersonShow'

class App extends Component {
    //state = {
    //    userName: [
    //        { name: 'abc' },
    //        {name: 'xyz'}
    //    ]
    //}

    //changeHaddler = (e) => {
    //    this.setState({
    //        userName: [
    //            { name: e.target.value },
    //            { name: 'xyz' }
    //        ]
    //    })
    //}

    render() {
        return (
            <div className="App">
                {/*<PersonDetails />*/}

                <PersonShow />

                {/*<UserInput change={this.changeHaddler} name={this.state.userName[0].name} />

                <UserOutput name={this.state.userName[0].name} />
                <UserOutput name={this.state.userName[1].name} />*/}
            </div>
        );
    }
}

export default App;
