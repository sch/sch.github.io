import svelte from "rollup-plugin-svelte";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import replace from "@rollup/plugin-replace";
import filesize from "rollup-plugin-bundle-size";

var plugins = [svelte(), nodeResolve(), commonjs()];

if (process.env.NODE_ENV === "production") {
  plugins.push(uglify(), filesize());
}

export default [
  {
    input: "js/index.js",
    output: {
      file: "_site/js/bundle.js",
      format: "iife",
      sourcemap: true
    },
    plugins
  },
  {
    input: "js/index-react.js",
    output: {
      file: "_site/js/bundle-react.js",
      format: "iife",
      sourcemap: true
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        )
      }),
      ...plugins
    ]
  }
];
