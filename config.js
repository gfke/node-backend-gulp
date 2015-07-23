'use strict';

var extend = require('extend');

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
                jsdoc: 'node_modules/.bin/jsdoc'
            }
        },
        gulpConfig: './node_modules/node-backend-gulp/',
        package: './package.json',
        shrinkwrap: './npm-shrinkwrap.json'
    }
};

//parts of the config may be defined in the directive gulpfile
//and may overrides every setting
global.config = global.config || {};
global.config = extend(true, defaultConfig, global.config);
