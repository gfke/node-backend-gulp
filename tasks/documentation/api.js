'use strict';

var gulp   = require('gulp'),
    apidoc = require('gulp-apidoc'),
    fs     = require('fs'),
    mkdirp = require('mkdirp');

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

    // Check if the target directory exists
    try {
        fs.lstatSync(global.config.files.doc.dest.api);
    }
    catch (ex) {
        mkdirp.sync(global.config.files.doc.dest.api);
    }

    if (runApiDoc) {
        apidoc({
            src: global.config.files.doc.src.api,
            dest: global.config.files.doc.dest.api,
            verbose: true,
            debug: true, //global.DEBUG,
            includeFilters: [".*\\.js$"]
        }, cb);
    }
    else {
        cb();
    }
});
