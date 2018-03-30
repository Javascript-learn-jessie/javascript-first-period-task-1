function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  var book = {};//标记是否已经存在
  var value;
  for(var i=0;i<collection_a.length;i++){
    value = collection_a[i];
    for(var j=0;j<collection_b.length;j++){
      if(collection_b[j]==value && book[value]!=1){
        result.push(value);
        book[value] = 1;
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
