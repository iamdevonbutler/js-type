# js-type

asfasdfasdfadfs

**engines: node >= 9.x**

## Installation
```
npm i --save js-type
```

## Example
```javascript
const type = require('js-type');

self.throw((test), 'string, array', 'array', ['boolean', 'function'], (arg) => {}); // throws



var obj = {
  value: type.string(),
};

obj.value = 'data'; // works.
obj.value = [1, 2] // errors.

```

## API

asfasdfasdfadfs

```javascript
const type = require('js-type');
```

## License

MIT
