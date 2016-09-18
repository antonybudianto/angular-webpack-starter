var gulp = require('gulp');
var util = require('gulp-util');
var gulpTemplate = require('gulp-template');

var config = require('../config')();
var envVars = require('../utils/env-vars');

gulp.task('env', function () {
    return gulp.src(config.config + 'env/env.ts')
        .pipe(gulpTemplate({
            env: envVars || {}
        }))
        .pipe(gulp.dest(config.app + 'shared/constant'))
        .on('finish', function () {
            util.log(config.app + 'shared/constant/env.ts is generated successfully');
        });
});
