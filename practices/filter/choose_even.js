'use strict';

function choose_even(collection) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection.length;i++){
    var value = collection[i];
    if(value%2==0){
      result.push(value);
    }
  }
  return result;
}

module.exports = choose_even;
