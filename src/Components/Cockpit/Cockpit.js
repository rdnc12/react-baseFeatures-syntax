import React from "react";
import classes from './Cockpit.module.css';

const cockpit = props => {
    const classesAssign = [];

    if (props.persons.length >= 2) {
      classesAssign.push(classes.red); // class=red
    }

    if (props.persons.length >= 1) {
      classesAssign.push(classes.bold); // class= red bold
    }

  return (
    <div>
      <p className={classesAssign.join(" ")}> Hello</p>
      <button
        className={classes.myButton}
        alt={props.persons.length}
        onClick={props.clicked}
      >
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;
