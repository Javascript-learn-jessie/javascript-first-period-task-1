'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  var book = new Array();
  var book_minus = new Array();
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > 0) {
      if (book[collection[i]] == undefined) {
        result.push(collection[i]);
        book[collection[i]] = 1;
      }
    } else {
      if (book_minus[collection[i] * (-1)] == undefined) {
        result.push(collection[i]);
        book_minus[collection[i]] = 1;
      }
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
