var webpackConfig = require('./config/webpack/webpack.test');

module.exports = function (config) {

  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: './config/test/karma-test-shim.js',
        watched: false
      }
    ],

    preprocessors: {
      './config/test/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
        type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      'json': './coverage/coverage.json',
      'html': './coverage/html',
      'lcovonly': './coverage/lcov.info'
    },

    reporters: ['progress', 'remap-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: !config.ci,
    browsers: ['PhantomJS'],
    singleRun: config.ci
  };

  if (config.ci) {
    _config.preprocessors['./config/test/karma-test-shim.js'].unshift('coverage');
    _config.reporters.push('coverage');
  }

  config.set(_config);
};
