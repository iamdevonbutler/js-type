module.exports = lock({
  string: {value: ['string']},
  number: {value: ['number']},
  date: {value: ['date']},
  timestamp: {value: ['timestamp']},
  boolean: {value: ['boolean']},
  object: {value: ['object']},
  objectId: {value: ['objectId']},
  null: {value: ['null']},
  array: (...types) => {
    return {
      value: ['array'],
      children: types.reduce((prev, current) => {
        current.value.forEach(val => {
          if (Array.isArray(val)) {
            prev = prev.concat(val);
          }
          else {
            prev.push(val);
          }
        });
        return prev;
      }, []),
    }
  },
  mixed: (...types) => {
    return {
      value: types.map(item => item.value[0])
    };
  },
});

function lock() {

};

function validate() {

};
