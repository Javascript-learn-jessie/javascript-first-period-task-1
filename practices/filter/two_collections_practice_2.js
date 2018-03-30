'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  var value;
  var flag=true;//标记是否b中是否有a
  for(var i=0;i<collection_a.length;i++){
    flag = true;
    value = collection_a[i];
    for(var j=0;j<collection_b.length;j++){
      if(collection_b[j]==value){
          flag =false;
          break;
      }
    }
    if(flag){
      result.push(value);
    }
  }
  return result;
}

module.exports = choose_no_common_elements;
