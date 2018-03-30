'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = collection_a;
  var flag;
  for (var i = 0; i < collection_b.length; i++) {
    var value = collection_b[i];
    flag = true;
    for (var j = 0; j < collection_a.length; j++) {
      if (value == collection_a[j]) {
        flag = false;
      }
    }
    if (flag) {
      result.push(value);
    }
  }
  return result;
}

module.exports = get_union;

