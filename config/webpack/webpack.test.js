const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');

const coreConfig = require('./webpack.core');
const helpers = require('./helpers');

const isCI = process.argv.indexOf('--ci') !== -1;

if (isCI) {
  console.log(chalk.bgBlue('CI flag is on'));
} else {
  console.log(chalk.bgGreen('CI flag is off'))
}

module.exports = webpackMerge(coreConfig, {
  devtool: 'inline-source-map',

  entry: {},

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          module: 'commonjs',
          sourceMap: !isCI,
          inlineSourceMap: isCI,
          forkChecker: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'angular2-template-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)/,
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
    .concat(!isCI ? [] : [
      {
        test: /\.(js|ts)$/,
        enforce: 'post',
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ])
  }
});
