'use strict';
function compare(a,b){
  return a-b;
}
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];
  collection.sort(compare);
  var count=0;
  for(var i=3;i<collection.length;i = i+3){//从i=3开始，
    result.push(collection[i-2]);
    result.push(collection[i-1]);
    result.push(collection[i-3]);
    count+=3;
  }
  //return count;
  if(count!=collection.length){
    for(var j=count;j<collection.length;j++){
      result.push(collection[j]);
    }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
