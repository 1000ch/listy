'use strict';

const test = require('tape');
const listy = require('..');

test('should return paths from file path', t => {
  t.plan(1);

  let argument = 'test/test.js';
  let expected = 1;

  t.equal(listy(argument).length, expected);
});

test('should return paths from file paths', t => {
  t.plan(1);

  let argument = ['test/test.js', 'test/fixtures/fixture.js'];
  let expected = 2;

  t.equal(listy(argument).length, expected);
});

test('should not return with argument which does not exist', t => {
  t.plan(1);

  let argument = ['test/foo.js', 'test/fixtures/bar.js'];
  let expected = 0;

  t.equal(listy(argument).length, expected);
});

test('should return paths from file path and folder path', t => {
  t.plan(1);

  let argument = ['test/test.js', 'test/fixtures/'];
  let expected = 3;

  t.equal(listy(argument).length, expected);
});

test('should return paths from single glob', t => {
  t.plan(1);

  let argument = 'test/**/*.json';
  let expected = 1;

  t.equal(listy(argument).length, expected);
});

test('should return paths from multiple glob', t => {
  t.plan(1);

  let argument = ['test/**/*.json', 'test/**/*.js'];
  let expected = 3;

  t.equal(listy(argument).length, expected);
});

test('should filter paths with extension', t => {
  t.plan(1);

  let argument = ['test/**/*.json', 'test/**/*.js'];
  let expected = 2;

  t.equal(listy(argument, {
    ext : '.js'
  }).length, expected);
});

test('should filter paths with function', t => {
  t.plan(1);

  let argument = ['test/**/*.json', 'test/**/*.js'];
  let expected = 1;

  t.equal(listy(argument, {
    filter : p => p.indexOf('.json') !== -1
  }).length, expected);
});
