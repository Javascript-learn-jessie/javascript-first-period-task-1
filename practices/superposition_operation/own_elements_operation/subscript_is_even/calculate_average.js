'use strict';
var calculate_average = function(collection){
    var avg;
    var sum=0,count=0;
    for(var i=0;i<collection.length;i++){
        if(collection[i]%2==0){
            sum+=collection[i];
            count++;
        }
    }
    avg = sum/count;
    return avg;

};
module.exports = calculate_average;
