var path = require("path");
var webpack = require("webpack");

var config = module.exports = require("./webpack.config");

config.devtool = "source-map";

config.output = {
  path: path.join(__dirname, "dist"),
  filename: "bundle.js"
};

config.plugins.push(new webpack.optimize.UglifyJsPlugin());
