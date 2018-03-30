'use strict';
function get_letter(num) {
  var letter;
  if (num / 26 == 0) {
    letter = String.fromCharCode(97 + num - 1);
  } else {
    var mod = num % 26;
    var first_letter;
    var second_letter;
    if (mod) {
      first_letter = String.fromCharCode(97 + num / 26 - 1);
      second_letter = String.fromCharCode(97 + num % 26 - 1);
    } else {
      first_letter = String.fromCharCode(97 + num / 26 - 2);
      second_letter = 'z';
    }
    letter = first_letter + second_letter;
  }
  return letter;
}
var number_map_to_word_over_26 = function (collection) {
  var result = [];
  var letter;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] <= 26) {
      letter = String.fromCharCode(97 + collection[i] - 1);
    } else {
      var mod = collection[i] % 26;
      var first_letter, second_letter;
      if (mod==0) {
        first_letter = String.fromCharCode(97 + collection[i] / 26 - 2);
        second_letter = 'z';
      } else {
        first_letter = String.fromCharCode(97 + collection[i] / 26 - 1);
        second_letter = String.fromCharCode(97 + collection[i] % 26 - 1);
      }
      letter = first_letter + second_letter;
    }

    result.push(letter);
  }

  return result;
};

module.exports = number_map_to_word_over_26;
