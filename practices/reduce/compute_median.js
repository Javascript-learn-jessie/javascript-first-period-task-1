'use strict';
function sortNumber(a, b) {
  return a - b;
}
function compute_median(collection) {
  //在这里写入代码
  var medium;
  collection.sort(sortNumber);// 先排序
  var len = collection.length;
  if (len % 2 != 0) {
    medium = collection[parseInt(len / 2)];
   // return len / 2;
  } else {
    medium = (collection[len / 2 - 1] + collection[len / 2]) / 2.0;
  }
  return medium;
}

module.exports = compute_median;


