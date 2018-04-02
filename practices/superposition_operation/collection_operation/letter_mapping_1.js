'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result = [];
  var letter;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      if (collection[i] % 26 != 0) {
        letter = String.fromCharCode(96 + collection[i] % 26);
      } else {
        letter = "z";
      }
      result.push(letter);
    }
    
  }
  return result;
}

module.exports = even_to_letter;
