var fs     = require('fs');
var path   = require('path');
var glob   = require('glob');
var isGlob = require('is-glob');

module.exports = function (arg, callback) {

  callback    = callback || function () {};
  var paths   = [];
  var error   = null;
  var string  = '';
  var strings = Array.isArray(arg) ? arg : [arg];

  for (var i = 0, l = strings.length;i < l;i++) {
    string = strings[i];

    if (typeof string !== 'string') {
      error = new Error('Invalid argument');
      break;
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
  
  callback(error, paths);
};