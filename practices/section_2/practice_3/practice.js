function find_name_in_result(collection, name) {
  var flag = false;
  var index = -1;
  for (var i = 0; i < collection.length; i++) {
    //  console.log(collection[i]);
    if (collection[i]["name"] == name) {
      index = i;
    }
  }
  return index;
}
function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var count = 1, key, value;
  var special_str = [];
  key = collection[0];
  var regex = /-|\[|\]|:/g;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].match(regex)) {
      //special_str.push(collection[i]);
      if (collection[i].match('\\[')) {
        var str_array = collection[i].split('[');
        var index_left = collection[i].search('\\[');
        var index_right = collection[i].search(']');
        name = collection[i].substr(0, index_left);
        summary = collection[i].substr(index_left + 1, index_right - index_left - 1);
      } else if (collection[i].match('-')) {
        var str_array = collection[i].split('-');
        var index = collection[i].search('-');
        name = collection[i].substr(0, index);
        summary = collection[i].substr(index + 1, );
      } else if (collection[i].match(':')) {
        var str_array = collection[i].split(':');
        var index = collection[i].search(':');
        name = collection[i].substr(0, index);
        summary = collection[i].substr(index + 1, );
      }
      //return special_str;
      var index = find_name_in_result(result, name);
      if (index != -1) {
        result[index]["summary"] += parseInt(summary);
      } else {
        result.push({ "name": name, "summary": parseInt(summary) });
      }
      continue;
    }
    if (collection[i] == collection[i + 1]) {
      count++;
      continue;
    }
    value = count;
    key = collection[i]
    count = 1;
    var index = find_name_in_result(result, key);
    // console.log(index);
    if (index == -1) {
      result.push({ "name": key, "summary": value });
    } else {
      result[index]["summary"] += value;
    }

  }
  return result;
}

module.exports = count_same_elements;
