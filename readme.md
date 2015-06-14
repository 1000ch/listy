# ls-path

[![Build Status](https://travis-ci.org/1000ch/ls-path.svg?branch=master)](https://travis-ci.org/1000ch/ls-path)
[![NPM version](https://badge.fury.io/js/ls-path.svg)](http://badge.fury.io/js/ls-path)
[![Dependency Status](https://david-dm.org/1000ch/ls-path.svg)](https://david-dm.org/1000ch/ls-path)
[![devDependency Status](https://david-dm.org/1000ch/ls-path/dev-status.svg)](https://david-dm.org/1000ch/ls-path#info=devDependencies)

List paths from any arguments

## Usage

```javascript
var lspath = require('ls-path');

lspath('./**/*.js', function (error, paths) {
  console.log(paths);
  // JavaScript files
});

lspath(['./index.js', '../directory'], function (error, paths) {
  console.log(paths);
  // resolved path to index.js and files in directory
});
```

## Install

With [npm](https://www.npmjs.com/) do:

```bash
$ npm install ls-path
```

## License

MIT: http://1000ch.mit-license.org