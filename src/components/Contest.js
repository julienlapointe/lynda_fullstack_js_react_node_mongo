import React, {Component, Proptypes } from "react";

class Contest extends React.Component {
	state = {
		header: "Header",
		data: this.props.initialData
	};
	render() {
		return(
			<div className="Contest">
				{this.props.id}
			</div>
		);
	}
};

Contest.propTypes = {
	id: React.PropTypes.number.isRequired
};

export default Contest;