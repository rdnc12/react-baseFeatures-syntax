

const Auxiliary = props => props.children;
// children is a special property that simply outputs whatever gets
// entered between the opening and closing tag of this component.

export default Auxiliary;


// Higher order component does not contain its own logic, its own styling. It is just a technical wrapper
// aux is adjacent elements without an extra DOM element being rendered to the real DOM,
// so without an extra HTML element like a div being rendered.
// React.Fragment does like aux component