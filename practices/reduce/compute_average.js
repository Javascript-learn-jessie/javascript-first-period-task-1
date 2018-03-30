'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=0,avg;
  for(var i=0;i<collection.length;i++){
    sum += collection[i];
  }
  avg = sum / collection.length;
  return avg;
}

module.exports = compute_average;

