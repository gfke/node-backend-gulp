'use strict';

var gulp  = require('gulp'),
    shell = require('gulp-shell');

module.exports = gulp.task('doc-markdown-readme', function () {
    var cmd = global.config.files.doc.bin.doctoc + ' ' + global.config.files.readme;
    //console.log('cmd: "%s"', cmd);

    return gulp.src('', {read: false})
        .pipe(shell([
            cmd
        ]));
});
