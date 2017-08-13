import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import App3 from "./src/components/App.js";
import config from "./config";

const serverRender = () =>
	axios.get(`${config.serverUrl}/api/contests`)
	.then(res => {
		return {
			initialMarkup: ReactDOMServer.renderToString(
				<App3 initialContests = {res.data.contests} />
			),
			initialData: res.data
		}
	});

export default serverRender;