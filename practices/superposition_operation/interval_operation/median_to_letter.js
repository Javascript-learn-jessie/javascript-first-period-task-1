'use strict';

function median_to_letter(collection) {
  var media;
  var letter;
  if (collection.length % 2) {
    media = collection[parseInt(collection.length / 2)];
  } else {
    media = Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2);
  }
  if (media / 26 < 0) {
    letter = String.fromCharCode(96 + media);
  } else {
    if (media / 26 == 1) {
      letter = "z";
    } else {
      var first_letter = String.fromCharCode(96 + parseInt(media / 26));
      var mod = media % 26;
      if (mod) {
        var second_letter = String.fromCharCode(96 + mod);
      } else {
        var second_letter = "z";
      }
      letter = first_letter + second_letter;
    }
  }
  return letter;
}

module.exports = median_to_letter;
