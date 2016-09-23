const webpack = require('webpack');
const path = require('path');

const helpers = require('./helpers');
const constants = require('./constants');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', helpers.root('src')]
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        enforce: 'post',
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          module: 'commonjs',
          sourceMap: false,
          inlineSourceMap: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'angular2-template-loader'
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      constants.CONTEXT_REPLACE_REGEX,
      helpers.root('./src') // location of your src
    )
  ]
}
