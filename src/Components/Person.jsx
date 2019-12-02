import React from "react";
import styled from "styled-components";
//import Radium from 'radium';
//import "./Person.css";

const Person = props => {
  // this is already react component provided by styled. so it is not necesarry to return it or adding props.
  const StyledDiv = styled.div`
    display: inline-block;
    width: 25%;
    margin: 10px;
    box-shadow: 4px 4px 15px 1px #000000;
    border: 1px dashed #ccc;
    border-top-left-radius: 90px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 90px;
    border-bottom-left-radius: 6px;
    padding: 16px;
    text-align: center;
    text-shadow: -1px 5px 9px rgba(150, 150, 150, 0.96);
    cursor: grabbing;
  `;
  // const style = {
  //   "@media(min-width:500px)": {
  //     width: "400px"
  //   }
  // };
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default Person;
//export default Radium(Person);
