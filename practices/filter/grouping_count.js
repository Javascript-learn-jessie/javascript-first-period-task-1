'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  collection.sort();
  var key, value;
  var count = 1;
  key = collection[0];
  for (var i = 1; i < collection.length; i++) {

    if (collection[i] == key) {
      count++;
    } else {
      value = count;
      result[key] = value;
      key = collection[i];
      count = 1;
    }
  }
  result[key]=count;//最后1类数的个数在循环中未被添加
  return result;
}

module.exports = grouping_count;
