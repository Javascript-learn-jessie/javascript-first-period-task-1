'use strict';
function sortNumber(a,b)
{
return a - b
}
function compute_chain_median(collection) {
  //在这里写入代码
  var medium;
  var array = [],result_arr=[];
  array = collection.split("->");
  for(var i=0;i<array.length;i++){
    var num = parseFloat(array[i]);
    array[i] = num;
  }
  array.sort(sortNumber);
 // return array;
  var len = array.length;
  if (len % 2 != 0) {
    medium = array[parseInt(len / 2)];
  } else {
    medium = (array[len / 2 - 1] + array[len / 2]) / 2.0;
  }
  return medium;
}

module.exports = compute_chain_median;
