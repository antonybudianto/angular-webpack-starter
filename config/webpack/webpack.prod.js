const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.APP_ENV || 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  entry: {
    'app': './src/app/main-ngc.ts'
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),

    // TODO: Webpack 2 issue https://github.com/webpack/webpack/issues/2644
    // new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'APP_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        htmlLoader: {
          minimize: false // workaround for ng2
        }
      }
    }),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
    })
  ]
});
