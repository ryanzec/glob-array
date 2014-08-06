var glob = require('glob');
var filterNegative = function(negativeMatches, allMatches) {
  negativeMatches.forEach(function(match) {
    var index = allMatches.indexOf(match);

    if(index > -1) {
      allMatches.splice(index, 1);
    }
  })
};

var globArray = {};
globArray.sync = function(patterns, options) {
  var fileMatches = [];
  patterns = patterns || [];
  options = options || {};

  patterns.forEach(function(pattern) {
    var patternMatches = glob.sync(pattern, options);

    if(pattern.substr(0, 1) !== '!') {
      fileMatches = fileMatches.concat(patternMatches);
    } else {
      filterNegative(patternMatches, fileMatches);
    }
  });

  return fileMatches;
};

module.exports = globArray;
