import React from "react";
import ContestPreview from "./ContestPreview.js";

// when "contests" was an array...
// const ContestList = ({contests, onContestClick}) => {
// 	return(
// 		<div className="ContestList">
// 			{contests.map(contest => 
// 				<ContestPreview 
// 					key={contest.id} 
// 					onClick={onContestClick}
// 					{...contest} />
// 			)}
// 		</div>
// 	);
// };

// converted "contests" to an object in apiRouter.js
const ContestList = ({contests, onContestClick}) => {
	return(
		<div className="ContestList">
			{Object.keys(contests).map(contestId => 
				<ContestPreview 
					key={contestId} 
					onClick={onContestClick}
					{...contests[contestId]} />
			)}
		</div>
	);
};

// when "contests" was an array...
// ContestList.propTypes = {
// 	contests: React.PropTypes.array,
// 	onContestClick: React.PropTypes.func.isRequired
// };

// converted "contests" to an object in apiRouter.js
ContestList.propTypes = {
	contests: React.PropTypes.object,
	onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;