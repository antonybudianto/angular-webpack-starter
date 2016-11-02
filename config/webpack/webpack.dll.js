const webpack = require('webpack');

const isProd = process.env.npm_lifecycle_event === 'build';
const helpers = require('./helpers');
const constants = require('./constants');

module.exports = {
  entry: {
    'polyfills': [ './src/polyfills.ts' ],
    'vendor': [ './src/vendor.ts' ]
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css' + (isProd ? '?minimize' : ''),
          'postcss'
        ]
      }
    ]
  },

  output: {
    filename: '[name].dll.js',
    path: 'dist/',

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dist/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]'
    }),

    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),

    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      constants.CONTEXT_REPLACE_REGEX,
      helpers.root('./src') // location of your src
    )
  ],
};