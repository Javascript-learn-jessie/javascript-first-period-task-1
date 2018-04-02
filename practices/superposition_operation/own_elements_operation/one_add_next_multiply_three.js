'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  var new_value;
  for(var i=0;i<collection.length-1;i++){
    new_value = (collection[i]+collection[i+1])*3;
    result.push(new_value);
  }


  return result;
}
module.exports = one_add_next_multiply_three;
