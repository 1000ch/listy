# listy

[![Build Status](https://travis-ci.org/1000ch/listy.svg?branch=master)](https://travis-ci.org/1000ch/listy)
[![NPM version](https://badge.fury.io/js/listy.svg)](http://badge.fury.io/js/listy)
[![Dependency Status](https://david-dm.org/1000ch/listy.svg)](https://david-dm.org/1000ch/listy)
[![devDependency Status](https://david-dm.org/1000ch/listy/dev-status.svg)](https://david-dm.org/1000ch/listy#info=devDependencies)

List resolved paths from any arguments.

## Usage

```javascript
const listy = require('listy');
const files = listy('./**/*.js');
// JavaScript files
```

## Install

With [npm](https://www.npmjs.com/) do:

```bash
$ npm install listy
```

## API

### `listy(arguments[, options])`

#### arguments

Type: `String` or `Array<String>`

#### options

Type: `Object` which contains following optional parameters.

- `ext` (Type: `String`)
- `filter` (Type: `Function`)

They will filter resolved file paths.

## License

MIT: http://1000ch.mit-license.org
