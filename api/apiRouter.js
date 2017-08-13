// API server

import express from "express";

import data from "../src/testData.json";

const router = express.Router();

// convert the data.contests array into an object where the key = the contest.id and the value = the actual contest object (corresponding to that ID) using the .reduce() array function
const contests = data.contests.reduce((obj, contest) => {
	obj[contest.id] = contest;
	return obj;
}, {});

// "router" object is similar to the "server" object from server.js
// can use .get() method of "router" object...
router.get("/contests", (req, res) => {
	// send back JSON (this is the API server)
	res.send({
		contests: contests
	});
});

router.get("/contests/:contestId", (req, res) => {
	let contest = contests[req.params.contestId]
	// send back JSON (this is the API server)
	contest.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quo, nihil? Atque dolore vitae aliquam odit illo sequi provident cumque et qui, pariatur deleniti quibusdam inventore! Quidem quisquam magnam eveniet."
	res.send(contest);
});

export default router;