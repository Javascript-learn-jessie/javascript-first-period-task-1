'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  collection_a.sort();
  collection_b.sort();
  var result = false;
  if (collection_a.length != collection_b.length)
    return result;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] != collection_b[i])
      return result;
  }
  result = true;
  return result;
}

module.exports = compare_collections;


