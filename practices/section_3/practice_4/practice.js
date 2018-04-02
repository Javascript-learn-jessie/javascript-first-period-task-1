function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var values = object_b["value"];
  //collection_a.sort();
  var key, count = 0;
  /**集合中相同元素计数 产生第一次集合C */
  key = collection_a[0];
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] == key) {
      count++;
      continue;
    }
    if (key.length == 1) {
      var map = {};//map 每次需要新定义，值会覆盖；
      map["key"] = key;
      map["count"] = count;
      result.push(map);
      count = 1;
    }
    key = collection_a[i];
    if (key.length != 1) {
      var map = {};
      var index = key.search("-");
      if (index != -1) {
        var key2 = key.substr(0, index);
        var count2 = key.substr(index + 1, 1);
        map["key"] = key2;
        map["count"] = parseInt(count2);//分割出的字符类型数字转换为整型
        result.push(map);
      }
    }
  }
  /*更改集合C中的count值*/
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    for (var j = 0; j < result.length; j++) {
      if (result[j]["key"] == value) {
        var times = parseInt(result[j]["count"] / 3);
        result[j]["count"] = result[j]["count"] - times;
      }
    }
  }
  return result;

}

module.exports = create_updated_collection;
