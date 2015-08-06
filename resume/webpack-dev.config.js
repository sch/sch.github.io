var path = require("path");
var webpack = require("webpack");

var config = module.exports = require("./webpack.config");

config.devtool = "eval";

config.entry = [
  "webpack-dev-server/client?http://localhost:3000",
  "webpack/hot/only-dev-server",
  "./src/index"
];

config.output = {
  path: path.join(__dirname, "dist"),
  filename: "bundle.js",
  publicPath: "/static/"
};
