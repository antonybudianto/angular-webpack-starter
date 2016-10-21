const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ngtools = require('@ngtools/webpack');

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.APP_ENV || 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.ts$/,
        loaders: ['@ngtools/webpack'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ]
  },

  entry: {
    'app': './src/app/main-ngc.ts'
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: 'tsconfig-aot.json',
      typeCheck: false
    }),
    new webpack.NoErrorsPlugin(),

    // TODO: Webpack 2 issue https://github.com/webpack/webpack/issues/2644
    // new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'APP_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require('postcss-cssnext')],
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
