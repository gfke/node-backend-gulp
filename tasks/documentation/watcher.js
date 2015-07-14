'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch-doc', function () {
    var files = [].concat(global.config.files.src, global.config.files.config);
    gulp.watch(files, ['doc']);

    gulp.start(['doc']);
});
