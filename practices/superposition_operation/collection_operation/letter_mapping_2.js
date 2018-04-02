'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result;
  var sum=0,avg;
  for(var i=0;i<collection.length;i++){
    sum+=collection[i];
  }
  avg = Math.ceil(sum/collection.length);
//  return avg;
  if(avg%26!=0){
    result = String.fromCharCode(96 + avg % 26);
  }else{
    result = "z";
  }
  return result;
}

module.exports = average_to_letter;

