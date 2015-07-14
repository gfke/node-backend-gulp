'use strict';

var gulp   = require('gulp'),
    apidoc = require('gulp-apidoc');

module.exports = gulp.task('doc-api', function () {
    apidoc.exec({
        src: global.config.files.doc.src.api,
        dest: global.config.files.doc.dest.api,
        debug: global.DEBUG,
        includeFilters: [".*\\.js$"]
    });
});
