const env = require('dotenv').config({ silent: true });
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const helpers = require('./helpers');
const constants = require('./constants');

const isProd = process.env.npm_lifecycle_event === 'build';
const envMap = _.mapValues(env, v => JSON.stringify(v));

if (!envMap.APP_ENV) {
  envMap.APP_ENV = 'development';
  console.log('APP_ENV is not set in your .env, it will default to "development"');
}

const entry = {
  'polyfills': './src/polyfills.ts',
  'style': './src/style.ts',
  'app': './src/main.ts'
};

if (isProd) {
  entry.vendor = './src/vendor.ts'
}

module.exports = {
  entry: entry,

  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules', helpers.root('src')]
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /^((?!(ngfactory|shim)).)*ts$/,
        loader: 'tslint-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: helpers.root('src', 'public')
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin
          .extract({
              fallbackLoader: "style-loader",
              loader: ['css-loader' + (isProd ? '?minimize' : ''), 'postcss-loader']
          })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader!postcss-loader'
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),

    new webpack.DefinePlugin({
      'process.env': envMap
    }),

    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      constants.CONTEXT_REPLACE_REGEX,
      helpers.root('./src') // location of your src
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'style', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      favicon: 'src/public/favicon.ico',
      template: 'src/public/index.html'
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require('postcss-cssnext')],
        tslint: {
          emitError: false,
          failOnHint: false
        }
      }
    })
  ]

};
