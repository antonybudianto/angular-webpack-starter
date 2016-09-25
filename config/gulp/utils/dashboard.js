var envConfig = require('../utils/env'),
    util = require('gulp-util'),
    _ = require('lodash');

var color;
var colorMap = {
    'development': 'bgGreen',
    'production': 'bgCyan'
};
color = colorMap[envConfig.ENV] || 'bgMagenta';

var StarterDashboard = {
    show: function() {
        console.log('============ Angular Webpack Starter ============');
        console.log('Current environment: ' + util.colors[color](envConfig.ENV));
        console.log('- Change environment by editing APP_ENV on .env');
        console.log('=================================================');
    }
};

module.exports = StarterDashboard;
