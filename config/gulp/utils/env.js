var env = require('dotenv').config({ silent: true });
var argv = require('yargs').argv;

var ENVS = {
    DEV: 'development',
    PROD: 'production',
    TEST: 'testing'
};

var ENV = process.env.APP_ENV || ENVS.DEV;

module.exports = {
    ENV: ENV,
    ENVS: ENVS
};
