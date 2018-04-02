function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var values=object_b["value"];
  //collection_a.sort();
  var key,count=0;
  /**集合中相同元素计数 产生第一次集合C */
  key = collection_a[0];
  for(var i=0;i<collection_a.length;i++){
    if(collection_a[i]==key){
      count++;
      continue;
    }
    var map={};//map 每次需要新定义，值会覆盖；
    map["key"]=key;
    map["count"]=count;
    result.push(map);
    count=1;
    key = collection_a[i];
  }
  var map={};
  map["key"]=key;
  map["count"]=count;
  result.push(map);
 
  /*更改集合C中的count值*/
  for(var i=0;i<values.length;i++){
    var value = values[i];
    for(var j=0;j<result.length;j++){
      if(result[j]["key"]==value){
        var times = parseInt(result[j]["count"]/3);
        result[j]["count"] = result[j]["count"] - times;
      }
    }
  }

  return result;
}

module.exports = create_updated_collection;
