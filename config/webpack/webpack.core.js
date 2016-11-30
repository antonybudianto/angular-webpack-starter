const webpack = require('webpack');
const env = require('dotenv').config({ silent: true });
const _ = require('lodash');

const constants = require('./constants');
const helpers = require('./helpers');
const envMap = _.mapValues(env, v => JSON.stringify(v));

if (!envMap.APP_ENV) {
  envMap.APP_ENV = '"development"';
  console.log('APP_ENV is not set in your .env, it will default to "development"');
} else {
  console.log('APP_ENV is ' + envMap.APP_ENV);
}

module.exports = {
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules', helpers.root('src')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envMap
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
  ]
};
