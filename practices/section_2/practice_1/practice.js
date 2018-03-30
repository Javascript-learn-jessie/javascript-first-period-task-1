function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
 // collection.sort();
  var count=1,key,value;
  key = collection[0];
  for(var i=1;i<collection.length;i++){
    if(collection[i]==key){
      count++;
      continue;
    }
    value = count;
    count = 1;
    result.push({"key":key,"count":value});
    key = collection[i];
  }
  //最后一类没有在循环中添加到结果中
  value = count;
  key = collection[i-1];
  result.push({"key":key,"count":value});
  return result;

}

module.exports = count_same_elements;
