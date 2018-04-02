'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  var book = {};//标记是否重复
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length) {
      for (var j = 0; j < collection[i].length; j++) {
        if (book[collection[i][j]] == undefined) {
          result.push(collection[i][j]);
          book[collection[i][j]]=1;
        }
      }
    }else{
      result.push(collection[i]);      
    }

  }
  return result;
}

module.exports = double_to_one;
