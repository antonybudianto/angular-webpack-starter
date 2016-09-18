var webpackConfig = require('./config/webpack/webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine', 'source-map-support'],

    files: [
      {
        pattern: './config/test/karma-test-shim.js',
        watched: false
      }
    ],

    preprocessors: {
      './config/test/karma-test-shim.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
        dir: 'coverage',
        reporters: [
            {
                type: 'json',
                subdir: '.',
                file: 'coverage.json'
            }
        ]
    },

    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};
