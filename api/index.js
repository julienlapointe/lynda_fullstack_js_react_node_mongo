// API server

import express from "express";

const router = express.Router();

// "router" object is similar to the "server" object from server.js
// can use .get() method of "router" object...
router.get("/", (req, res) => {
	// send back JSON (this is the API server)
	res.send({data: []});
});

export default router;