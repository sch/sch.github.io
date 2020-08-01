import svelte from "rollup-plugin-svelte";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
import filesize from "rollup-plugin-bundle-size";
import typescript from "@rollup/plugin-typescript";
import autoPreprocess from "svelte-preprocess";

const isProduction = !process.env.ROLLUP_WATCH;

var plugins = [
  svelte({ dev: !isProduction, preprocess: autoPreprocess() }),
  nodeResolve({ browser: true, dedupe: ["svelte"] }),
  commonjs(),
  typescript({ sourceMap: !isProduction }),
  replace({
    "process.env.NODE_ENV": JSON.stringify(
      isProduction ? "production" : "development"
    )
  })
];

if (isProduction) {
  plugins.push(terser(), filesize());
}

export default [
  {
    input: "js/index.ts",
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
    plugins
  }
];
