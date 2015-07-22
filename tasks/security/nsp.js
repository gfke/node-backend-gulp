'use strict';

var gulp = require('gulp'),
    nsp  = require('gulp-nsp'),
    fs   = require('fs');

/**
 * Check if a file exists.
 *
 * @param {string}   fileName        Check if this file exists on the disk.
 * @param {function} callbackSuccess Call this function if the file exists.
 * @param {function} callbackError   Call this function if the file does not exist.
 */
var checkIfFileExists = function (fileName, callbackSuccess, callbackError) {
    fs.stat(fileName, function (err, stat) {
        if (err) {
            callbackError();
        }
        else {
            callbackSuccess();
        }
    });
};

// Check the project's "package.json"
module.exports = gulp.task('nsp-package', function (cb) {
    checkIfFileExists(
        global.config.files.package,
        function () {
            nsp(global.config.files.package, cb);
        },
        cb
    );
});

// Check the project's "npm-shrinkwrap.json"
module.exports = gulp.task('nsp-shrinkwrap', function (cb) {
    checkIfFileExists(
        global.config.files.shrinkwrap,
        function () {
            nsp(global.config.files.shrinkwrap, cb);
        },
        cb
    );
});
