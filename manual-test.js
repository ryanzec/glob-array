#!/usr/bin/env node
var globArray = require('./lib/index.js');

var patterns = [
  'pattern1/*',
  'pattern2/*'
];
var globOptions = {
  /* any regular node-glob option */
};

//sync
var files = globArray.sync(patterns, globOptions);
console.log('sync:')
console.log(files);
