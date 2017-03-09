var path = require("path");
var webpack = require("webpack");

var config = module.exports = {};

config.entry = "./src/index";

config.output = {
  filename: "bundle.js",
  path: path.join(__dirname, "dist"),
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
      test: /\.css$/,
      use: ["style-loader", "css-loader", "autoprefixer-loader"]
    },

    {
      test: /\.markdown$/,
      use: ["html-loader", "markdown-loader"]
    }
  ]
};
