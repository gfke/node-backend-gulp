'use strict';

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    gulpJsdoc2md = require('gulp-jsdoc-to-markdown'),
    rename       = require('gulp-rename');

module.exports = gulp.task('doc-markdown-github-pages', function (cb){
    var runJSDoc = false;

    // Check if source directory exists
    try {
        var stats = fs.lstatSync(global.config.files.doc.src.webservice);

        if (stats.isDirectory()) {
            runJSDoc = true;
        }
    }
    catch (ex) {}

    if (runJSDoc) {
        return gulp.src(global.config.files.doc.src.webservice)
            //.pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
            .pipe(gulpJsdoc2md())
            .on('error', function(err){
                gutil.log(gutil.colors.red('jsdoc2md failed'), err.message);
            })
            .pipe(rename(function(path){
                path.extname = '.md';
            }))
            .pipe(gulp.dest(global.config.files.doc.dest.gh_classes));
    }
    else {
        cb();
    }
});