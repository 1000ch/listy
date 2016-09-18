'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const isGlob = require('is-glob');

const normalize = value => {
  if (!value) {
    return [];
  }

  let array;
  if (Array.isArray(value)) {
    array = value;
  } else {
    array = [value];
  }

  const compaction = item => item !== null || item !== undefined;
  const stringify = item => item.toString();

  return array.filter(compaction).map(stringify);
};

module.exports = (arg, options) => {
  let paths = [];
  let strings = normalize(arg);
  options = options || {};

  for (let string of strings) {
    if (isGlob(string)) {
      glob.sync(string).forEach(p => paths.push(p));
      continue;
    }

    if (!fs.existsSync(string)) {
      continue;
    }

    let fi = fs.statSync(string);

    if (fi.isFile()) {
      paths.push(path.resolve(string));
    } else if (fi.isDirectory()) {
      fs.readdirSync(string).forEach(p => paths.push(p));
    }
  }

  if (options.ext) {
    paths = paths.filter(item => path.extname(item) === options.ext);
  }

  if (typeof options.filter === 'function') {
    paths = paths.filter(item => options.filter(item));
  }

  return paths;
};
