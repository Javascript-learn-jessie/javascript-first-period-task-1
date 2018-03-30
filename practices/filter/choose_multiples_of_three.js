'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection.length;i++){
    var value = collection[i];
    if(value%3==0){
      result.push(value);
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
