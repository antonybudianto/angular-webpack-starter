const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const commonConfig = require('./webpack.common.js');
const constants = require('./constants');
const helpers = require('./helpers');

let polyfillsManifest;
let vendorManifest;

try {
  polyfillsManifest = require(helpers.root(constants.DLL_DIST, 'polyfills-manifest.json'));
  vendorManifest = require(helpers.root(constants.DLL_DIST, 'vendor-manifest.json'));
} catch (e) {
  throw 'Please rebuild DLL first by running `npm run build:dll`';
}

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: 'awesome-typescript-loader',
        query: {
          forkChecker: true
        }
      },
      {
        test: /\.ts$/,
        loaders: [
          'angular2-template-loader',
          '@angularclass/hmr-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: polyfillsManifest
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: vendorManifest
    }),
    new AddAssetHtmlPlugin([
      { filepath: constants.DLL_DIST + '/polyfills.dll.js', includeSourcemap: false },
      { filepath: constants.DLL_DIST + '/vendor.dll.js', includeSourcemap: false }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],

  devServer: {
    hot: true,
    contentBase: './src/public',
    historyApiFallback: true,
    stats: 'minimal'
  }
});
