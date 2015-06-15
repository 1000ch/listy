var assert = require('power-assert');
var lspath = require('../');

describe('ls-path', function () {

  it('should return paths from file path', function (callback) {

    this.timeout(10000);
    var argument = 'test/test.js';
    var expected = 1;

    assert(lspath(argument).length === expected);
    lspath(argument, function (error, paths) {
      assert(!error, error);
      assert(paths.length === expected);
      callback();
    });
  });

  it('should return paths from file paths', function (callback) {

    this.timeout(10000);
    var argument = ['test/test.js', 'test/fixtures/test.js'];
    var expected = 2;

    assert(lspath(argument).length === expected);
    lspath(argument, function (error, paths) {
      assert(!error, error);
      assert(paths.length === expected);
      callback();
    });
  });

  it('should not return with argument which does not exist', function (callback) {

    this.timeout(10000);
    var argument = ['test/foo.js', 'test/fixtures/bar.js'];
    var expected = 0;

    assert(lspath(argument).length === expected);
    lspath(argument, function (error, paths) {
      assert(!error, error);
      assert(paths.length === expected);
      callback();
    });
  });

  it('should return paths from file path and folder path', function (callback) {

    this.timeout(10000);
    var argument = ['test/test.js', 'test/fixtures/'];
    var expected = 3;

    assert(lspath(argument).length === expected);
    lspath(argument, function (error, paths) {
      assert(!error, error);
      assert(paths.length === expected);
      callback();
    });
  });

  it('should return paths from single glob', function (callback) {

    this.timeout(10000);
    var argument = 'test/**/*.json';
    var expected = 1;

    assert(lspath(argument).length === expected);
    lspath(argument, function (error, paths) {
      assert(!error, error);
      assert(paths.length === expected);
      callback();
    });
  });

  it('should return paths from multiple glob', function (callback) {

    this.timeout(10000);
    var argument = ['test/**/*.json', 'test/**/*.js'];
    var expected = 3;

    assert(lspath(argument).length === expected);
    lspath(argument, function (error, paths) {
      assert(!error, error);
      assert(paths.length === expected);
      callback();
    });
  });

});
