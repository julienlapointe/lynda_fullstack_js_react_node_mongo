// index.js should do 1 thing: render the top-level component (App) to the DOM

// moved imports to bottom where the Component is...
// import React from "react";
// import ReactDOM from "react-dom";

// // .render() has 2 parameters:
// 	// param #1: what to render
// 	// param #2: where to render it
// // .createElement() has 3 parameters:
// 	// param #1: HTML element tag
// 	// param #2: HTML element attribute(s)
// 	// param #3+: child elements of this element
// ReactDOM.render(
// 	React.createElement("h2", null, "Hello from React!"),
// 	document.getElementById("root1")
// );

// ////////////////////////////////////////////////////////////

// ReactDOM.render(
// 	<h2>Hello from React with JSX! {Math.random()}</h2>,
// 	document.getElementById("root2")
// );

// ////////////////////////////////////////////////////////////

// const color = Math.random() > 0.5 ? "green" : "red";

// ReactDOM.render(
// 	<h2 style={{color: color}}>
// 		Hello from React with JSX w/ Style Variables!
// 	</h2>,
// 	document.getElementById("root3")
// );

// ////////////////////////////////////////////////////////////

// // this component accepts props to be outputted in JSX
// const App1 = (props) => {
// 	return(
// 		<div>
// 			<h2 className="text-center">
// 				Hello from React with JSX via a Component! {props.message}
// 			</h2>
// 			<div>
// 				...
// 			</div>
// 		</div>
// 	);
// };

// ReactDOM.render(
// 	<App1 />,
// 	document.getElementById("root4")
// );

// // "prop validation"
// // message: React.PropTypes.string = props.message must be a string (throw an error if a number or other "primitive" is passed in)
// // .isRequired = throw an error if the value for props.message is missing / empty
// App1.propTypes = {
// 	message: React.PropTypes.string.isRequired
// };

// // set a default value for props.message
// App1.defaultProps = {
// 	message: "I'm the default value for the props.message!"
// };

// ReactDOM.render(
// 	<App1 message="And from props!" />,
// 	document.getElementById("root5")
// );

// ////////////////////////////////////////////////////////////

// // const Header2 = (props) => {
// // 	return(
// // 		<h2 className="text-center">
// // 			{props.message2}
// // 		</h2>
// // 	);
// // };

// // used destructuring to access props.message2
// const Header2 = ({message2}) => {
// 	return(
// 		<h2 className="text-center">
// 			{message2}
// 		</h2>
// 	);
// };

// // validation for a prop (ex. props.message2 validation below) must take place *after* the Component definition that uses that prop (ex. Header2 defined above)
// Header2.propTypes = {
// 	message2: React.PropTypes.string.isRequired
// };

// const App2 = () => {
// 	return(
// 		<div className="App2">
// 			<Header2 message2="Hello from a Component within a Component!" />
// 			<div>
// 				...
// 			</div>
// 		</div>
// 	);
// };

// ReactDOM.render(
// 	<App2 />,
// 	document.getElementById("root6")
// );

////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import App3 from "./components/App.js";
import data from "./testData.json";
// console.log(data);

// note: data.contests is an array of objects (see testData.json to understand why we didn't just pass in "data")
ReactDOM.render(
	<App3 contests = {data.contests} />,
	document.getElementById("root7")
);

// setTimeout(() => {
// 	ReactDOM.render(
// 		<h2>Forced React to unmount the App3 Component after 4s and re-render with this message!</h2>,
// 		document.getElementById("root7")
// 	);
// }, 4000);