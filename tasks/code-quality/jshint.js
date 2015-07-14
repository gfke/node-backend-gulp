'use strict';

var gulp   = require('gulp'),
    jshint = require('gulp-jshint');

module.exports = gulp.task('jshint', function () {
    return gulp.src([].concat(global.config.files.src, global.config.files.config))
        .pipe(jshint(global.config.files.gulpConfig + '.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        //.pipe(jshint.reporter('fail'))
        ;
});
