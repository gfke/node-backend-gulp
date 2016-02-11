'use strict';

var gulp = require('gulp'),
    jscs = require('gulp-jscs');

module.exports = gulp.task('jscs', function() {
    return gulp.src([].concat(global.config.files.src, global.config.files.config))
        .pipe(jscs({
            configPath: global.config.files.jscsrc
        }));
});
