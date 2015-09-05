var fs     = require('fs');
var path   = require('path');
var glob   = require('glob');
var isGlob = require('is-glob');

function listy(arg) {

  var paths   = [];
  var errors  = [];
  var string  = '';
  var args = Array.isArray(arg) ? arg : [arg];

  for (var i = 0, l = args.length;i < l;i++) {
    string = args[i];

    if (string === null || string === undefined) {
      continue;
    } else if (typeof string !== 'string') {
      string = string.toString();
    }

    if (isGlob(string)) {
      Array.prototype.push.apply(paths, glob.sync(string));
      continue;
    }

    if (!fs.existsSync(string)) {
      continue;
    }

    var fi = fs.statSync(string);

    if (fi.isFile()) {
      paths.push(path.resolve(string));
    } else if (fi.isDirectory()) {
      Array.prototype.push.apply(paths, fs.readdirSync(string));
    }
  }

  return paths;
}


module.exports = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(listy(arg));
    } catch (e) {
      reject(e);
    }
  });
};

module.exports.sync = listy;
