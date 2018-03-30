'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var even;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      even = collection[i];
      break;
    }
  }
  return even;
}

module.exports = find_first_even;

