'use strict';
function get_letter(num) {
  var letter;
  if (num <= 26) {
    letter = String.fromCharCode(96 + num);
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

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码  只含两个英文字母
  var result = [];
  var letter;
  if (number_a <= number_b)
    for (var i = number_a; i <= number_b; i++) {
      letter = get_letter(i);
      result.push(letter);
    }
  if(number_a>number_b) {
    for (var i = number_a; i >= number_b; i--) {
      letter = get_letter(i);
      result.push(letter);
    }
  }
  return result;
}
module.exports = get_letter_interval_2;

