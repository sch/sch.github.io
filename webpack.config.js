var path = require("path");
var webpack = require("webpack");

var config = module.exports = {};

config.entry = "./js/resume";

config.output = {
  filename: "resume-bundle.js",
  path: path.join(__dirname, "_site", "js"),
  publicPath: "/dist/",
  library: "Resume",
  libraryTarget: "umd"
};

config.devtool = "source-map";

config.module = {
  rules: [
    {
      test: /\.js$/,
      use: ["babel-loader"],
      exclude: /node_modules/
    },

    {
      test: /\.markdown$/,
      use: ["html-loader", "markdown-loader"]
    }
  ]
};

