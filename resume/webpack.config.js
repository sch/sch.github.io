var path = require("path");
var webpack = require("webpack");

var config = module.exports = {};

var jsRule = {
  test: /\.js$/,
  use: ["babel-loader"],
  include: path.join(__dirname, "src")
};

var cssRule = {
  test: /\.css$/,
  use: ["style-loader", "css-loader", "autoprefixer-loader"]
};

var markdownRule = {
  test: /\.markdown$/,
  use: ["html-loader", "markdown-loader"]
};

config.module = {rules: [jsRule, cssRule, markdownRule]};

config.entry = "./src/index";

config.output = {
  filename: "bundle.js",
  path: path.join(__dirname, "dist"),
  publicPath: "/dist/",
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}
