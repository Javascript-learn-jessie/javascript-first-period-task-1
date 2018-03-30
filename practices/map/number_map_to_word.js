'use strict';
var number_map_to_word = function(collection){
  var result=[];
  var letter;
  for(var i=0;i<collection.length;i++){
    letter = String.fromCharCode(97+collection[i]-1);
    result.push(letter);
    //result.push(get_letter(collection[i]));
  }
  return result;
};

module.exports = number_map_to_word;
