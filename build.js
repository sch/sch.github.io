var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var fs = require("fs");
var path = require("path");

var config = require("./webpack.config");

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "postcss-loader"]
  })
});

config.plugins = [
  new ExtractTextPlugin("styles.css"),

  new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  })
];

console.log("Building webpack bundle file...");

webpack(config, function(err, stats) {
  if (err || stats.hasErrors()) {
    console.log("something went wrong", err);
  } else {
    buildResume(stats);
  }
});

function buildResume() {
  console.log("Generating initial HTML page...");
  var Resume = require("./_site/js/resume-bundle");
  var contents = renderToString(Resume.Component);
  var shell = fs.readFileSync(
    path.join(__dirname, "index.template.html"),
    "utf8"
  );
  var html = shell.replace("<!-- yield -->", contents);
  fs.writeFileSync(path.join(__dirname, "src", "resume", "index.html"), html);
  console.log("Done!");
}

function renderToString(component) {
  return ReactDOMServer.renderToString(React.createElement(component));
}
