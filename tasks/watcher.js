'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch', function () {
    gulp.start(['watch-test', 'watch-code-quality', 'watch-doc']);
});
