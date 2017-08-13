import config from "./config.js";
import express from "express";
import fs from "fs";
import apiRouter from "./api/index.js";

const server = express();

// server.get("/", (req, res) => {
// 	res.send("Hello from Express!");
// });

// server.get("/about.html", (req, res) => {
// 	fs.readFile("./about.html", (err, data) => {
// 		res.send(data.toString());
// 	});
// });

// set the Express API server to use EJS for templating
// Express looks in "views" folder for the EJS templates
server.set("view engine", "ejs");

server.get("/", (req, res) => {
	// render an EJS template
	res.render("index.ejs", {
		content: "Hello from Express + <strong>EJS</strong>!"
	});
});

// middleware for handling route to API
server.use("/api", apiRouter);

server.use(express.static("public"));

server.listen(config.port, () => {
	console.info("Express server is listening on port", config.port);
});