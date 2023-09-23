const { swc } = require('rollup-plugin-swc3');


module.exports = {
  input: 'src/index.ts',
  output: {},
  plugins: [
    swc({
      // All options are optional
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.json', // default
      // tsconfig: false, // You can also prevent `rollup-plugin-swc` from reading tsconfig.json, see below
      // And add your swc configuration here!
      // "filename" will be ignored since it is handled by rollup
      jsc: {}
    }),
  ]
}