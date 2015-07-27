'use strict';

var gulp   = require('gulp'),
    apidoc = require('gulp-apidoc'),
    fs     = require('fs');

module.exports = gulp.task('doc-api', function (cb) {
    var runApiDoc = false;

    // Check if source directory exists
    try {
        var stats = fs.lstatSync(global.config.files.doc.src.api);

        if (stats.isDirectory()) {
            runApiDoc = true;
        }
    }
    catch (ex) {}

    if (runApiDoc) {
        apidoc.exec({
            src: global.config.files.doc.src.api,
            dest: global.config.files.doc.dest.api,
            debug: global.DEBUG,
            includeFilters: [".*\\.js$"]
        });
    }
    else {
        cb();
    }
});
