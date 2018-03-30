'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    var value = collection_a[i];
    for (var j = 0; j < collection_b.length; j++) {
      if (value != collection_b[j]) continue;
      result.push(value);
    }
  }
  // 按照从小到大排序,用选择排序
  var minValue, temp, minIndex;
  minValue = result[0];
  var flag = false;
  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[j] < minValue) {
        minIndex = j;
        flag = true;
      }
    }
    if (flag) {
      temp = result[i];
      result[i] = result[minIndex];
      result[minIndex] = temp;
    }
  }
  return result;
}

module.exports = get_intersection;
