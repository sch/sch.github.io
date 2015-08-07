var path = require("path");
var webpack = require("webpack");

var config = module.exports = require("./webpack.config");

config.devtool = "eval";

config.entry = config.entry.concat([
  "webpack-dev-server/client?http://localhost:3000",
  "webpack/hot/only-dev-server"
]);

config.output = {
  path: path.join(__dirname, "dist"),
  filename: "bundle.js",
  publicPath: "/static/"
};
