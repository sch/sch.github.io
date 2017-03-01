var path = require("path");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
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

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
];

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  compress: true,
  hot: true,
  historyApiFallback: true
}).listen(PORT, "localhost", function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at: " + url);
});
