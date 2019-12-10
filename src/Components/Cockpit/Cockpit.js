
// useRef is for functional component
import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
 

  useEffect(() => {
    // it runs for every update and this means we can already use it for
    // all the things.
    console.log("[Cockpit.js] useEffect");

    // http request...

    // when we delete cockpit, it shows alert.
    // we make timer for mounting and unmounting(in return)
    // const timer = setTimeout(() => {
    //   alert("saved data");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // [props.persons]= when persons change, it will work

  const classesAssign = [];

  if (props.personsLength >= 2) {
    classesAssign.push(classes.red); // class=red
  }

  if (props.personsLength >= 1) {
    classesAssign.push(classes.bold); // class= red bold
  }

  return (
    <div>
      <p className={classesAssign.join(" ")}> {props.title}</p>
      <button
        ref={toggleBtnRef}
        className={classes.myButton}
        personsLength={props.personsLength} // we make its out of cockpit
        onClick={props.clicked}
      >
        {props.name ? props.name : "Toggle Person"}
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
// memo => store a snapshot of this component and if only if its
// INPUT CHANGES, it wil re-render it.
