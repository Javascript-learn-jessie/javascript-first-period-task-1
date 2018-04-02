'use strict';
function compare(a,b){
    return a-b;
}
var single_element = function(collection){
    var array=[];
    var result=[];
   // collection.sort(compare);
    for(var i=0;i<collection.length;i++){
        if((i+1)%2==0){
            array.push(collection[i]);
        }
    }
    array.sort(compare);
    var count=1;
    for(var j=0;j<array.length;j++){
        if(array[j+1]==array[j]){
            count++;
            continue;
        }
        if(count==1)
        result.push(array[j]);
        count=1;
    }
    return result;
};
module.exports = single_element;
