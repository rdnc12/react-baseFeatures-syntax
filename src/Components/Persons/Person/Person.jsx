import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";

class Person extends Component {
constructor(props){
  super(props)
  this.inputElementRef=React.createRef();
}

componentDidMount(){
  this.inputElementRef.current.focus();
}

  render() {
    return (
      <Auxiliary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

// make your props using correctly.
// give a correct error when developer use props incorrectly
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// ref
// 1-) (old way method)anonymous arrow function an reference to the element.
//  ref={(inputEl)=>{this.inputElement=inputEl}}
// componentDidMount(){
// this.inputElement.focus();}
// 2-) this is a new way
//constructor(){this.inputElement=React.createRef();}
// ref={this.inputElementRef}
