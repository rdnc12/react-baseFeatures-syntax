import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

ReactDOM.render(<App appTitle="Person Manager" />, rootElement);
serviceWorker.register();

//Component Lifecycle-Creation
// 1-) when a component is created, then first of all the "CONSTRUCTOR" executes
// it is for basic initialization work(setting an initial state)
// 2-) getDerivedStateFromProps(props,state)
//  this will be not using much.(update some internal state of component)
// 3-) Render method executes. (return JSX) prepare and structure our JSX code.
// 4-) Render Child Components
// 5-) componentDidMount() is a typical hook you would use for making an HTTP request
// to get new data from the web. (Don't Update the state, if you do that, it affect react performance
// and render one more time)

// COMPONENT LIFECYCLE-UPDATE
// 1-)getDerivedStateFromProps(props,state) 
// this is not often using. (getting Updated props )
// 2-) shouldComponentUpdate(nextProps,nextState)
// it allows us to cancel the updating process. You can decide whether or not React
// should evaluating and re-rendering the component for performance optimization.
// 3-) render()
// 4-) Update Child Component Props
// 5-) getSnapshotBeforeUpdate(prevProps,prevState)
// you can use previous props and state and configure them
// 6-) componentDidUpdate() 
// same as creation 5th step

