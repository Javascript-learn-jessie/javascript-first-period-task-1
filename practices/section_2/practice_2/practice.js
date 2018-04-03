function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var count = 1, key, value;
  key = collection[0];
  for (var i = 1; i < collection.length; i++) {
      if (key.match('-') != null) {
          var strArray = key.split('-');
          key = strArray[0];
          value = parseInt(strArray[1]);
          result.push({ "key": key, "count": value });
          key = collection[i];
          count=1;
          continue;
      }
      if (collection[i] == key) {
          count++;
          continue;
      }
      value = count;
      count = 1;
      result.push({ "key": key, "count": value });
      key = collection[i];
  }
  //最后剩下的特殊形式计数，如d-5
  if (key.match('-')) {
      var strArray = key.split('-');
      key = strArray[0];
      value = parseInt(strArray[1]);
      result.push({ "key": key, "count": value });
  }else{
    value = count;
    count = 1;
    result.push({ "key": key, "count": value });
  }
  return result;
}

module.exports = count_same_elements;
