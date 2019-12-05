import React, { Component } from "react";
import Person from "./Person/Person";

// const persons=(props)=>(); this is an ES6 features that means return.
class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  // componentWillReceiveProps(props){
  //   // we try updating, then
  //   console.log("[Persons.js] componentWillReceiveProps");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    // after the update finished we can fetch new data from a server
    console.log("[Persons.js] componentDidUpdate");
  }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
