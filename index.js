'use strict';

global.DEBUG = (process.env.NODE_ENV === 'debug');
global.CI = (process.env.CI === 'true');

var requireDir = require('require-dir');

require('./config');
requireDir('./tasks', {recurse: true});
