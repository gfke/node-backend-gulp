'use strict';

var extend = require('extend'),
    fs     = require('fs');

var defaultConfig = {
    files: {
        src: [
            './source/**/*.js',
            './test/*.js'
        ],
        test: [
            './test/**/*.spec.js'
        ],
        config: [
            './config/**/*.js'
        ],
        testConfig: './test/prepare-tests.js',
        doc: {
            src: {
                api: './source/controllers/',
                webservice: './source/'
            },
            dest: {
                api: './doc/api',
                webservice: './doc/webservice'
            },
            bin: {
                jsdoc: 'node_modules/.bin/jsdoc',
                doctoc: 'node_modules/.bin/doctoc'
            }
        },
        gulpConfig: './node_modules/node-backend-gulp/',
        package: './package.json',
        shrinkwrap: './npm-shrinkwrap.json',
        readme: './README.md'
    }
};

//parts of the config may be defined in the directive gulpfile
//and may overrides every setting
global.config = global.config || {};
global.config = extend(true, defaultConfig, global.config);


// Check if this module is running as a submodule
global.config.isSubModule = false;

try {
    var stats = fs.lstatSync(global.config.files.gulpConfig);

    if (stats.isDirectory()) {
        global.config.isSubModule = true;
    }
}
catch (ex) {}
//console.log('Is a gulp-submodule ? ', global.config.isSubModule);
