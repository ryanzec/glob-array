var glob = require('glob');

var globArray = function(patterns, options, cb) {
  patterns = patterns || [];
  options = options || {};

  patterns.forEach(function(pattern) {
    var patternMatches = glob(pattern, options, cb);
  });
};

globArray.sync = function(patterns, options) {
  var fileMatches = [];
  patterns = patterns || [];
  options = options || {};

  patterns.forEach(function(pattern) {
    var patternMatches = glob.sync(pattern, options);

    fileMatches = fileMatches.concat(patternMatches);
  });

  return fileMatches;
};

module.exports = globArray;
