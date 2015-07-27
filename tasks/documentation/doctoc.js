'use strict';

var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    path  = require('path');

module.exports = gulp.task('doc-markdown-readme', function () {
    var cmd = path.resolve(
            global.config.files.gulpConfig +
            (global.config.isSubModule ? '' : '../../') +
            global.config.files.doc.bin.doctoc
        ) +
        ' ' +
        global.config.files.readme;
    //console.log('cmd: "%s"', cmd);

    return gulp.src('', {read: false})
        .pipe(shell([
            cmd
        ]));
});
