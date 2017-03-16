import svelte from "rollup-plugin-svelte";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import buble from "rollup-plugin-buble";
import filesize from "rollup-plugin-bundle-size"

var plugins = [
  svelte(),
  nodeResolve(),
  commonjs(),
  buble()
]

if (process.env.NODE_ENV === "production") {
  plugins.push(uglify(), filesize())
}

export default {
  entry: "js/index.js",
  dest: "_site/js/bundle.js",
  format: "iife",
  sourceMap: true,
  plugins: plugins
}
