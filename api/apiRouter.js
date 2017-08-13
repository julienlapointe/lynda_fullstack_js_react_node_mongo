// API server

import express from "express";

import data from "../src/testData.json";

const router = express.Router();

// "router" object is similar to the "server" object from server.js
// can use .get() method of "router" object...
router.get("/contests", (req, res) => {
	// send back JSON (this is the API server)
	res.send({contests: data.contests});
});

export default router;