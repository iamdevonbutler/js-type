const isType = require('js-istype');
const








// how to do an array with types X and Y





// see how to use as func params.
function test(test, best, mest) {

};

self.export = type.throw(test, 'string, array', 'array', ['boolean', 'function'], (arg) => {}); // throws
self.export = type.error(test); // [error, error1]
self.export = type.fail(test); // returns undefined.

type = {};
type.throw = (callback, types) => (...args) => {
  var isValid = args.every((arg, i) => validateType(arg, types[i]));
  if (!isValid) {
    throw new Error();
  }
  return callback.call(null, ...args);
};

function validateType() {

};

return;


module.exports = (type) => {
  required: true,
  type: type.string(),
};

{
  required: true,
  type: (type) => {
    //
  }
};

function lock(obj) {
  return new Proxy(Object.assign(obj), {
    set: function(obj1, prop, value) {
      return value;
    }
  });
};
