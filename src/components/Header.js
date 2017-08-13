import React from "react";

// used destructuring to access props.message3
const Header3 = ({message3}) => {
	return(
		<h2 className="text-center">
			{message3}
		</h2>
	);
};

// validation for a prop (ex. props.message3 validation below) must take place *after* the Component definition that uses that prop (ex. Header3 defined above)
Header3.propTypes = {
	message3: React.PropTypes.string.isRequired
};

export default Header3;