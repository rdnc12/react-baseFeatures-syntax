// useRef and useContext are for functional component
import React, { useEffect, useRef,useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../Context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext=useContext(AuthContext);
  // Context API is all about managing data across components without the need to pass
  // data around with props.

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
    
        <button onClick={authContext.login}>Log in</button>
      
    </div>
  );
};

export default React.memo(Cockpit);
// memo => store a snapshot of this component and if only if its
// INPUT CHANGES, it wil re-render it.
