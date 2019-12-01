process.env.NODE_ENV = "production";

var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var fs = require("fs");
var path = require("path");

var config = require("./webpack.config");

config.module.rules.push({
  test: /\.css$/,
  use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "postcss-loader"]
});

config.plugins = [
  new MiniCssExtractPlugin({
    filename: "styles.css"
  }),

  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  })
];

console.log("Building webpack bundle file...");

webpack(config, function(err, stats) {
  if (err || stats.hasErrors()) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
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
