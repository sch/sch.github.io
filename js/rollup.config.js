import svelte from 'rollup-plugin-svelte';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [svelte(), nodeResolve(), commonjs()]
}
