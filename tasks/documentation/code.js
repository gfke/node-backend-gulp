'use strict';

var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    fs    = require('fs'),
    path  = require('path');

module.exports = gulp.task('doc-code', function (cb) {
    var runJSDoc = false;

    // Check if source directory exists
    try {
        var stats = fs.lstatSync(global.config.files.doc.src.webservice);

        if (stats.isDirectory()) {
            runJSDoc = true;
        }
    }
    catch (ex) {}

    // Check if the target directory exists
    try {
        fs.lstatSync(global.config.files.doc.dest.api);
    }
    catch (ex) {
        mkdirp.sync(global.config.files.doc.dest.api);
    }

    if (runJSDoc) {
        //NOTICE: native solution over "gulp-jsdoc", because the "gulp-jsdoc" package is not up to date

        var cmd = global.config.files.doc.bin.jsdoc +
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
    }
    else {
        cb();
    }
});
