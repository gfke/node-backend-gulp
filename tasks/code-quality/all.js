'use strict';

var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    jscs        = require('gulp-jscs'),
    jscsStylish = require('gulp-jscs-stylish'),
    noop        = function () {};

module.exports = gulp.task('code-quality', function () {
    return gulp.src([].concat(global.config.files.src, global.config.files.config))
        .pipe(jshint(global.config.files.jshintrc))
        .pipe(jscs({
            configPath: global.config.files.jscs
        }))
        .on('error', noop)
        .pipe(jscsStylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'))
        //.pipe(jshint.reporter('fail'))
        ;
});
