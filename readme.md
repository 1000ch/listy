# listy

[![Build Status](https://travis-ci.org/1000ch/listy.svg?branch=master)](https://travis-ci.org/1000ch/listy)
[![NPM version](https://badge.fury.io/js/listy.svg)](http://badge.fury.io/js/listy)
[![Dependency Status](https://david-dm.org/1000ch/listy.svg)](https://david-dm.org/1000ch/listy)
[![devDependency Status](https://david-dm.org/1000ch/listy/dev-status.svg)](https://david-dm.org/1000ch/listy#info=devDependencies)

List paths from any arguments

## Usage

```javascript
var listy = require('listy');

var files = listy('./**/*.js');
// JavaScript files

listy('./**/*.js', function (error, paths) {
  console.log(paths);
  // JavaScript files
});

listy(['./index.js', '../directory'], function (error, paths) {
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
