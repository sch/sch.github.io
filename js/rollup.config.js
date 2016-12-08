// rollup.config.js
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [svelte()]
}
