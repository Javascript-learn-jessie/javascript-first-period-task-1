'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码，只包含26个字母
  var result = [];
  var letter;
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      letter = String.fromCharCode(97 + i - 1);
      result.push(letter);
    }
  } else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      letter = String.fromCharCode(97 + i - 1);
      result.push(letter);
    }
  } else {
    letter = String.fromCharCode(97 + number_a - 1);
    result.push(letter);
  }
  return result;
}

module.exports = get_letter_interval;
