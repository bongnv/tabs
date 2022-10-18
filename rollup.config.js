const commonjs = require('@rollup/plugin-commonjs');
const coffee = require('rollup-plugin-coffee-script');

const pkg = require('./package.json');

module.exports = {
  input: 'lib/main.js',
  external: ['atom', 'electron', ...Object.keys(pkg.dependencies)],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    coffee(),
    commonjs({
      extensions: ['.js', '.coffee'],
      requireReturnsDefault: "auto",
    }),
  ],
};
