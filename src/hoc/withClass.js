import React from "react";

// first way to create higher order component
//const WithClass = props => <div className={props.classes}>{props.children}</div>;

// second way
// withClass is not a component anymore, it is just a normal js function.
// props={props} and {...props} are same, but we we prefer second argument
const withClass=(WrappedComponent, className)=>{

    return props =>(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;
