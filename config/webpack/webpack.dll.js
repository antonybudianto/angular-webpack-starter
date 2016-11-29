const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const coreconfig = require('./webpack.core');
const constants = require('./constants');

module.exports = webpackMerge(coreconfig, {
  entry: {
    'polyfills': [ './src/polyfills.ts' ],
    'vendorDll': [ './src/vendor.dll.ts' ]
  },

  output: {
    filename: '[name].dll.js',
    path: constants.DLL_DIST + '/',

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: constants.DLL_DIST + '/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]'
    })
  ],
});