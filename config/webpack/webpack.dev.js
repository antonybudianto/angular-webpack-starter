const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(helpers.root('dist', 'polyfills-manifest.json'))
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(helpers.root('dist', 'vendor-manifest.json'))
    }),
    new AddAssetHtmlPlugin([
      { filepath: 'dist/polyfills.dll.js', includeSourcemap: false },
      { filepath: 'dist/vendor.dll.js', includeSourcemap: false }
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
