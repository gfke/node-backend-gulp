'use strict';

var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    path  = require('path');

module.exports = gulp.task('doc-code', function () {
    //NOTICE: native solution over "gulp-jsdoc", because the "gulp-jsdoc" package is not up to date

    var cmd = path.resolve(global.config.files.gulpConfig + global.config.files.doc.bin.jsdoc) +
        ' --destination ' +
        global.config.files.doc.dest.webservice +
        ' --package package.json ' +
        ' --readme README.md ' +
        ' --recurse ' +
        global.config.files.doc.src.webservice +
        '';
    //console.log('cmd: "%s"', cmd);

    return gulp.src('', {read: false})
        .pipe(shell([
            cmd
        ]));
});
