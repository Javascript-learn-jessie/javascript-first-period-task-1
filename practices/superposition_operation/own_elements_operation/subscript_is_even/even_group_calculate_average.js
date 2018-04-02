'use strict';
var even_group_calculate_average = function (collection) {
    var medium;
    var array = new Array();
    var result = [];
    var sum=0,avg;
    //collection.sort();
    var j = 0;
    for (var i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 == 0) {

            if (collection[i] % 2 == 0) {
                j = collection[i].toString().length;
                if (array[j] == undefined)
                    array[j] = new Array();
                array[j].push(collection[i]);
            }

            //array.push(collection[i]);
        }
    }
   /// return array;
    if (array.length == 0) {
        result.push(0);
    } else {
        for (var j = 1; j < array.length; j++) {
            if (array[j]) {//不为undefined
                for (var k = 0; k < array[j].length; k++) {
                    sum+=array[j][k];
                }
                avg = sum/array[j].length;
                result.push(avg);
                sum = 0;
            }

        }
    }
    return result;
};
module.exports = even_group_calculate_average;
