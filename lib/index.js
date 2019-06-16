const isType = require('js-istype');

const self = {};

self.throw = (callback, types) => (...args) => {
  var errors = args.map((arg, i) => validateType(arg, types[i])).filter(Boolean);
  if (errors) {
    throw new Error(errors);
  }
  return callback.call(null, ...args);
};

self.error = (callback, types) => (...args) => {
  var errors = args.map((arg, i) => validateType(arg, types[i])).filter(Boolean);
  if (errors) return errors;
  return callback.call(null, ...args);
};

self.fail = (callback, types) => (...args) => {
  var errors = args.map((arg, i) => validateType(arg, types[i])).filter(Boolean);
  if (errors) return;
  return callback.call(null, ...args);
};

self.string = () => (value) => {
  return validateType(value, 'string');
};

self.array = () => (value) => {
  return validateType(value, 'array');
};

self.boolean = () => (value) => {
  return validateType(value, 'boolean');
};

self.date = () => (value) => {
  return validateType(value, 'date');
};

self.number = () => (value) => {
  return validateType(value, 'number');
};

self.object = () => (value) => {
  return validateType(value, 'object');
};

self.function = () => (value) => {
  return validateType(value, 'function');
};

self.null = () => (value) => {
  return validateType(value, 'null');
};

self.undefined = () => (value) => {
  return validateType(value, 'undefined');
};

self.symbol = () => (value) => {
  return validateType(value, 'symbol');
};

self.NaN = () => (value) => {
  return validateType(value, 'NaN');
};

self.error = () => (value) => {
  return validateType(value, 'error');
};

function validateType(value, name) {
  if (Array.isArray(name)) {
    let errors = name.reduce((p, c) => {
      var result = validateType(c);
      if (result) p.concat(result);
      return p;
    }, []);
    return errors && errors.length ? errors : null;
  }
  if (~name.indexOf(',')) { // if a mixed type
    return name.split(',').some(name1 => {
      return !!validateType(value, name1) || false;
    }) ? null : {expected: name, actual: value};
  }
  return isType(value, name) ? null : {expected: name, actual: value};
};

function lock(obj) {
  return new Proxy(Object.assign(obj), {
    set: function(obj1, prop, value) {
      return value;
    }
  });
};

module.exports = lock(self);
