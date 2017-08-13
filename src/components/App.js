// this is purely "presentational Component" / "stateless Component" because we cannot use the React state...

import React from "react";
import Header3 from "./Header.js";

const App3 = () => {
	return(
		<div className="App3">
			<Header3 message3="Hello from a Component in a Separate Module / File" />
			<div>
				...
			</div>
		</div>
	);
};

export default App3;