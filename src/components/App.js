// this is purely "presentational Component" / "stateless Component" because we cannot use the React state...

import React from "react";

import Header3 from "./Header.js";
import ContestList from "./ContestList.js";
import Contest from "./Contest.js";
// import data from "../testData.json";

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

// class App3 extends React.Component {
// 	state = {
// 		test: "Naming Contests"
// 	};
// 	render() {
// 		return(
// 			<div className="App3">
// 				<Header3 message3={this.state.pageHeader} />
// 				<div>
// 					{this.state.test}
// 				</div>
// 			</div>
// 		);
// 	}
// }

// <ContestPreview {...this.props.contests[0]}

// now we are getting "contests" from "state" instead of "props"
// {this.props.contests.map(contest => 
// 	<ContestPreview key={contest.id} {...contest} />
// )}

// when props = data from an API, props must start as an object w/ an empty array {[]} and then populate the array when the data is received

// note: data.contests is an array of objects (see testData.json to understand why we didn't just pass in "data")

const pushState = (obj, url) => {
	window.history.pushState(obj, "", url);
}

class App3 extends React.Component {
	state = {
		pageHeader: "Naming Contests",
		contests: this.props.initialContests
	};
	componentDidMount() {
		
	}
	componentWillUnmount() {
		
	}
	fetchContest = (contestId) => {
		pushState(
			{currentContestId: contestId}, 
			`/contest/${contestId}`
		);
		this.setState({
			pageHeader: this.state.contests[contestId].contestName,
			currentContestId: contestId
		});
	};
	currentContent() {
		if (this.state.currentContestId) {
			return <Contest {...this.state.contests[this.state.currentContestId]} />
		}
		return <ContestList
			onContestClick={this.fetchContest}
			contests={this.state.contests} />;
	}
	render() {
		return(
			<div className="App3">
				<Header3 message3={this.state.pageHeader} />
				{this.currentContent()}
			</div>
		);
	}
}

export default App3;