// PureComponent is already implements shouldComponentUpdate
// with a complete props check
import React, { PureComponent } from "react";
import Person from "./Person/Person";

// const persons=(props)=>(); this is an ES6 features that means return.
class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  // componentWillReceiveProps(props){
  //   // we try updating, then
  //   console.log("[Persons.js] componentWillReceiveProps");
  // }

  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked) {
  //     return true; // whenever something change in persons here or re-rendered, then we update.
  //   } else {
  //     return false;
  //   }
  // } 
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    // after the update finished we can fetch new data from a server
    console.log("[Persons.js] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          // if we write only this.props.changed(event, person.id) without callback function,
          // this code runs one time(when app is rendered), and never runs again.
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;

// how react updates the DOM
// 1-) render() is called
// 2-) Old Virtual DOM (faster than DOM) and Re-rendered Virtual DOM
//     (DOM representation in JS)           (render() doesn't immmedietly update the real DOM)
// 3-) React makes comparasion between them. if it can detect differences,
//     it reaches out to the real DOM and updates it  

