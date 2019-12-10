import React, { Component,Fragment } from "react";
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import withClass from '../../../hoc/withClass'
import classes from "./Person.module.css";

class Person extends Component {
  render(){
    return (
       <Auxiliary > 
        <p onClick={this.props.click}>
          I'm {this.props.name} and {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
       </Auxiliary> 
      
    );
  }
  
};

export default withClass(Person,classes.Person);
