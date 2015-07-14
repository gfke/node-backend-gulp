'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch-test', function () {
    var files = [].concat(global.config.files.src, global.config.files.test, global.config.files.config);
    gulp.watch(files, ['unit-test']);

    gulp.start(['unit-test']);
});
