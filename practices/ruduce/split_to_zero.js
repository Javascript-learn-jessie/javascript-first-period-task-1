'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=[];
  while(number>0){
    result.push(parseFloat(number));
    number = parseFloat(number - interval).toFixed(10);
  }
  result.push(parseFloat(number)).toFixed(10);
  return result;
}

module.exports = spilt_to_zero;
