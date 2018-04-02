'use strict';
var calculate_median = function (collection) {
    var medium;
    var array=[];
    collection.sort();
    for(var i=0;i<collection.length;i++){
        if((i+1)%2==0){
            array.push(collection[i]);
        }
    }
    if(array.length%2==0){
        medium = (array[array.length/2-1]+array[array.length/2])/2;
    }else{
        medium = array[parseInt(array.length/2)];
    }
    return medium;

};
module.exports = calculate_median;
