var path = require("path");
var webpack = require("webpack");

var config = module.exports = {};

var jsLoader = {
  test: /\.jsx?$/,
  loaders: ["react-hot", "babel"],
  include: path.join(__dirname, "src")
};

var cssLoader = {
  test: /\.css$/,
  loader: [
    "style-loader",
    "css-loader",
    "autoprefixer-loader"
  ].join("!")
};

var markdownLoader = {
  test: /\.markdown$/,
  loader: "html!markdown"
};

config.module = {loaders: [jsLoader, cssLoader, markdownLoader]};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.resolve = {extensions: ["", ".js", ".jsx"]};

config.entry = ["./src/index"];
