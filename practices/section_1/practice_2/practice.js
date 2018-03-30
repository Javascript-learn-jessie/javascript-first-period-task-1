function collect_same_elements(collection_a, collection_b) {
  //比较的是集合中的元素。。多一层循环
  var result = [];
  var book = {};//标记是否已经存在
  var value;
  for (var i = 0; i < collection_a.length; i++) {
    value = collection_a[i];
    for (var j = 0; j < collection_b.length; j++) {
      for (var k = 0; k < collection_b[j].length; k++) {
        if (collection_b[j][k] == value && book[value] != 1) {
          result.push(value);
          book[value] = 1;
        }
      }

    }
  }
  return result;
}

module.exports = collect_same_elements;
