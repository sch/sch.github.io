var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = require("./webpack.config");

var PORT = 3000;

var url = "http://localhost:" + PORT;

config.devtool = "inline-source-map";

config.entry = [
  "react-hot-loader/patch",
  "webpack-dev-server/client?" + url,
  "webpack/hot/only-dev-server",
  config.entry
];

config.output.publicPath = "/";

config.module.rules.push({
  test: /\.css$/,
  use: ["style-loader", "css-loader", "postcss-loader"]
});

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    title: "HOT Resume",
    template: "js/template.html"
  })
];

new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  compress: true,
  hot: true,
  historyApiFallback: true
}).listen(PORT, "localhost", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening at: " + url);
  }
});
