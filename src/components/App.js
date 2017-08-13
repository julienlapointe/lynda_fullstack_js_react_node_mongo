// this is purely "presentational Component" / "stateless Component" because we cannot use the React state...

import React from "react";
import Header3 from "./Header.js";

// constructor(props) {
// 	super(props);
// 	this.state = {test: 42};
// }
// =
// state = {test: 42};

// the Component was successfully mounted to the DOM
// componentDidMount() {

// the Component is *about* to be unmounted
// componentWillUnmount() {

class App3 extends React.Component {
	state = {
		pageHeader: "Naming Contests"
	};
	componentDidMount() {
		console.log("componentDidMount!");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount!");
	}
	render() {
		return(
			<div className="App3">
				<Header3 message3={this.state.pageHeader} />
				<div>
					{this.state.test}
				</div>
			</div>
		);
	}
}

export default App3;