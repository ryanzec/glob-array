# Glob Array

Simple wrapper for node-glob that allows you to pass in an array of patterns.

# Usage

```javascript
var patterns = [
  'pattern1',
  'pattern2'
];
var globOptions = {
  /* any regular node-glob option */
};

//NOTE: currently only support and sync option
//sync
var files = globArray.sync(patterns, globOptions);
```

# License

MIT
