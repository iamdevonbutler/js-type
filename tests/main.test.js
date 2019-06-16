const type = require('../lib');

const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

var func = (a, b, c, d) => {};
var funcThrow = type.throw(func, 'string', ['number', 'boolean'], 'object, array', value => null);
var funcError = type.error(func, 'string', ['number', 'boolean'], 'object, array', value => null);
var funcFail  = type.fail(func, 'string', ['number', 'boolean'], 'object, array', value => null);

var types = ['string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function', 'date', 'NaN', 'error', 'symbol'];
var valid = ['a', 1, true, {}, [], undefined, null, () => {}, new Date(), NaN, new Error(), Symbol()];
var invalid = [1, 'a', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// test lock.
describe('js-type tests', () => {
  describe('.throw()', () => {
    it ('should', () => {

    });
  });
});
