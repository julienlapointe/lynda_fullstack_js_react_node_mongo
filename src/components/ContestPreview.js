import React, {Component} from "react";

// ContestPreview receives a (1) "contest" object
// const ContestPreview = (contest) => {
// 	return(
// 		<div className="ContestPreview" onClick={}>
// 			<div className="category-name">
// 				{contest.categoryName}
// 			</div>
// 			<div className="contest-name">
// 				{contest.contestName}
// 			</div>
// 		</div>
// 	);
// };

class ContestPreview extends React.Component {
	handleClick = () => {
		console.log(this.props.contestName);
		this.props.onClick(this.props.id);
	};
	render() {
		return(
			<div className="link ContestPreview" onClick={this.handleClick}>
				<div className="category-name">
					{this.props.categoryName}
				</div>
				<div className="contest-name">
					{this.props.contestName}
				</div>
			</div>
		);
	}
}

ContestPreview.propTypes = {
	id: React.PropTypes.number.isRequired,
	categoryName: React.PropTypes.string.isRequired,
	contestName: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func.isRequired
};

export default ContestPreview;