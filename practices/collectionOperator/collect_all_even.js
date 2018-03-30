'use strict';

function collect_all_even(collection) {
  //在这里写入代码
    var i=0,result=[];
    for (var i = 0; i < collection.length; i++) {
        var value = collection[i];
        if (value%2==0) {
            result.push(value);
        }
    }
    return result;
}

module.exports = collect_all_even;
