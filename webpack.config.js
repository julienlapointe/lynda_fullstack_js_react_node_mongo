module.exports = {
	entry: "./src/component.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	}
};
