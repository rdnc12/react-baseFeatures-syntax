import React, { Component } from "react";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import classes from "./App.module.css";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";

// we use styled dynamic css rules with adding props in to created our stylecomponent.

class App extends Component {
  constructor(props) {
    // constructor receives props
    // and you have to call super(props). It brings component props from we imported in this file.

    super(props);

    this.state = {
      // "id" is unique. React check the id and dont render whole page
      // only render that changed value. Make a "key"is more efficient.

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
      ],
      showPersons: false,
      showCockpit: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    return state; //  we should return updated state.
  }

  // componentWillMount() {
  //   // it would be something like preparing your state correctly
  //   //
  //   console.log("componentWiilMount");
  // }

  componentDidMount() {
    // important
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // important for performance improvements
    console.log("[App.js] shouldComponentUpdate");
    return true; // we arrange component be rendered of not
  }

  componentDidUpdate() {
    // important
    console.log("[App.js] componentDidUpdate");
  }

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
    // there is a difference between render() {} and arrow function (render()=>{}).
    // If we use arrow function we can use "this" and it refers the function.

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }
    return (
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);

// statefull component(not automatically class-based component)
// when we are managing state in component. State and setState.
// functional component is also statefull component
// it manages its own state with the useState

// stateless component is a functional component that does no manage state.
// because you know what happens when you call it.

// class based component is for 'this'
//functional component is for 'props'. You can use in all other cases.
