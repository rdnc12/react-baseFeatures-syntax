import React, { Component } from "react";
//import styled from "styled-components";
//import Radium, { StyleRoot } from "radium"; // styleroot is for using mediaqueries and using with class at the same time
import { Add, Multiply, Subtract, Divide } from "./Components/Calculator";
import Person from "./Components/Person";
import "./App.css";

// we use styled dynamic css rules with adding props in to created our stylecomponent.

class App extends Component {
  // "id" is unique. React check the id and dont render whole page
  // only render that changed value. Make a "key"is more efficient.
  state = {
    persons: [
      {
        id: Math.random()
          .toString(36)
          .substr(2, 16),
        name: "Erdinc",
        age: 30
      },
      {
        id: Math.random()
          .toString(36)
          .substr(2, 16),
        name: "Tugba",
        age: 33
      }
    ]
  };

  // there is a difference between render() {} and arrow function (render()=>{}).
  // If we use arrow function we can use "this" and it refers the function.
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // this is modern way to add personIndex to persons
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative way to add personIndex to the object
    //const person=Object.assign({},this.state.persons[personIndex]);

    // event.target.value waits response from users such as input
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons;

    // make an array with all persons values with spread operators(...)
    // it makes value of current array. not this [[1,2,3],4], but [1,2,3,4]
    // this is more safer copying something to new variable.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const getHour = new Date().getHours();
    const colorLi = {
      color: "red",
      listStyleType: "none",
      border: "1px solid black"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length >= 2) {
      classes.push("red"); // class=red
    }

    if (this.state.persons.length >= 1) {
      classes.push("bold"); // class= red bold
    }

    return (
      // <StyleRoot>
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
        <hr />
        <ul>
          <li style={colorLi}>Hello {getHour}</li>
          <li>{Add(1, 2)}</li>
          <li>{Multiply(1, 2)}</li>
          <li>{Subtract(1, 2)}</li>
          <li>{Divide(1, 2)}</li>
          <li>hello sandbox</li>
        </ul>
        <hr /> */}
        <p className={classes.join(" ")}> Hello</p>
        <button
          className="myButton"
          alt={this.state.persons.length}
          onClick={this.togglePersonsHandler}
        >
          Toggle Person
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
//export default Radium(App);
