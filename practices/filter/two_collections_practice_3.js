'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  var flag = false;
  for (var i = 0; i < collection_a.length; i++) {
    flag = false;
    var value = collection_a[i];
    for (var j = 0; j < collection_b.length; j++) {
      if (value % collection_b[j] == 0) {
        flag = true;
        break;
      }
    }
    if (flag) {
      result.push(value);
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
