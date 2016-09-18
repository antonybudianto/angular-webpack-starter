var gulp = require('gulp');
var config = require('../config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-coverage', 'clean-ngc']);

gulp.task('clean-ngc', function() {
    return del([
        'output',
        'src/compiled'
    ]);
});

/* Clean build folder */
gulp.task('clean-build', function () {
    return del([
        config.build
    ]);
});

/* Clean coverage folder */
gulp.task('clean-coverage', function () {
    return del([
        config.coverage
    ]);
});
