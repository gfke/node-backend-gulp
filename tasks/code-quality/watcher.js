'use strict';

var gulp = require('gulp');

module.exports = gulp.task('watch-code-quality', function () {
    var files = [].concat(global.config.files.src, global.config.files.config);
    gulp.watch(files, ['code-quality']);

    gulp.start(['code-quality']);
});
