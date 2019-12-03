import React, { Component } from "react";

// React Developer Tool is an extension that we check our project
// We use debugging in google chrome extension.
// ErrorBoundary is a higher component and it should be top of component
// that  want to be checked. We use it for cases where we know that it
// might fail and you can't control that. For instance, we add an outer element
// in our case, outer element is person.id.
/* <ErrorBoundary key={person.id} >
<Person
click={() => this.deletePersonHandler(index)}
name={person.name}
age={person.age}
changed={event => this.nameChangeHandler(event, person.id)}
/>
</ErrorBoundary> */
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMsg: ""
  };

  componentDidCatch = (error, info) => {
    // Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true,
      errorMsg: error
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMsg}</h1>;
    } else {
      return this.props.children; // other default message
    }
  }
}

export default ErrorBoundary;
