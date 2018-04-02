function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var values=object_b["value"];
  for(var i=0;i<values.length;i++){
    var key = values[i];
    for(var j=0;j<collection_a.length;j++){
      if(collection_a[j]["key"]==key){
        var count = collection_a[j]["count"];
        var times = parseInt(count/3);
        collection_a[j]["count"] = count - times;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
