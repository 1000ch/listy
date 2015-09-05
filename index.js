import fs     from 'fs';
import path   from 'path';
import glob   from 'glob';
import isGlob from 'is-glob';

const push = Array.prototype.push;

function listy(arg, options = {}) {

  let paths   = [];
  let errors  = [];
  let string  = '';
  let args = Array.isArray(arg) ? arg : [arg];

  for (let string of args) {

    if (string === null || string === undefined) {
      continue;
    } else if (typeof string !== 'string') {
      string = string.toString();
    }

    if (isGlob(string)) {
      push.apply(paths, glob.sync(string));
      continue;
    }

    if (!fs.existsSync(string)) {
      continue;
    }

    let fi = fs.statSync(string);

    if (fi.isFile()) {
      paths.push(path.resolve(string));
    } else if (fi.isDirectory()) {
      push.apply(paths, fs.readdirSync(string));
    }
  }

  if (options.ext) {
    paths = paths.filter(p => path.extname(p) === options.ext);
  }

  if (typeof options.filter === 'function') {
    paths = paths.filter(p => options.filter(p));
  }

  return paths;
}

module.exports = function (arg, options = {}) {
  return new Promise((resolve, reject) => {
    try {
      resolve(listy(arg, options));
    } catch (e) {
      reject(e);
    }
  });
};

module.exports.sync = listy;
