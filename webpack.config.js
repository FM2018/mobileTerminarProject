var Ext = require("extract-text-webpack-plugin");

module.exports = {
	entry : __dirname + "/src/js/main.js",
	output : {
		path : __dirname + "/dist/",
		filename : "app.js"
	},
	devtool : "source-map",
	devServer : {
		contentBase : __dirname + "/dist/",
		port : 3000,
		inline : true
	},
	module : {
		loaders : [
			{test : /\.js$/,exclude:/node_modules/,loader:"babel-loader?presets[]=es2015"},
			{test : /\.less$/,loader: Ext.extract("css-loader!less-loader")},
			{test : /\.css$/,loader:Ext.extract("css-loader")}
		]
	},
	plugins : [
		new Ext("app.css")
	]
}