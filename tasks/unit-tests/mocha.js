'use strict';

var gulp       = require('gulp'),
    spawnMocha = require('gulp-spawn-mocha');

module.exports = gulp.task('unit-test-mocha', function () {
    return gulp.src(global.config.files.test, {read: false})
        .pipe(spawnMocha({
            debugBrk: global.DEBUG,
            r: global.config.files.testConfig,
            R: (CI ? 'spec' : 'progress'),
            istanbul: !global.DEBUG
        }));
});
