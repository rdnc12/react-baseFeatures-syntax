import React, { Component } from "react";
import { Add, Multiply, Subtract, Divide } from "./Components/Calculator";
import Person from "./Components/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Erdinc", age: 30 },
      { name: "Tugba", age: 33 }
    ]
  };

  switchNameHandler = newName => {
    // this.state.persons[0].name="Salih"
    this.setState({
      persons: [
        { name: newName, age: 5 },
        { name: "Melih", age: 2 }
      ]
    });
  };
  // there is difference between render() {} and arrow function. If we use arrow function we can use "this" and it refers the function.
  // event.target.value waits response from users such as input
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Salih", age: 5 },
        { name: event.target.value, age: 2 }
      ]
    });
  };

  render() {
    const getHour = new Date().getHours();
    const colorLi = {
      color: "red",
      listStyleType: "none",
      border: "1px solid black"
    };
    const myButton = {
      boxShadow: "0px 10px 14px -7px #276873",
      background: "linear-gradient(to bottom, #599bb3 5%, #408c99 100%)",
      backgroundColor: "#599bb3",
      borderRadius: "8px",
      display: "inline-block",
      cursor: "pointer",
      color: "#ffffff",
      fontFamily: "Arial",
      fontWeight: "bold",
      padding: "13px 32px",
      textDecoration: "none",
      textShadow: "0px 1px 0px #3d768a"
    };

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <hr />
        <ul>
          <li style={colorLi}>Hello {getHour}</li>
          <li>{Add(1, 2)}</li>
          <li>{Multiply(1, 2)}</li>
          <li>{Subtract(1, 2)}</li>
          <li>{Divide(1, 2)}</li>
          <li>hello sandbox</li>
        </ul>
        <hr />
        // "this" is switchNameHandler function. Callback function is depend on
        you and project size.Because react render one more time if we use it. It
        is not efficient.
        <button style={myButton} onClick={() => this.switchNameHandler("Salih")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Salih!!")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>
          My hobbies:
        </Person>
      </div>
    );
  }
}

export default App;
