'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum=0,avg;
  var count=0;//奇数 个数
  for(var i=0;i<collection.length;i++){
      if(collection[i]%2!=0){
        sum+=collection[i];
        count++;
      }
  }
  avg = sum/count;
  return avg;
}

module.exports = average_uneven;
