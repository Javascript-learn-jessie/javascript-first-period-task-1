'use strict';
function compare_asc(a, b) {
    return a - b;
}
function compare_des(a, b) {
    return b - a;
}
var even_asc_odd_desc = function (collection) {
    var result = [];
    var even = [];
    var not_even = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2)
            not_even.push(collection[i]);
        else
            even.push(collection[i]);
    }
    even.sort(compare_asc);
    not_even.sort(compare_des);
    for (var j = 0; j < even.length; j++)
        result.push(even[j]);
    for (var k = 0; k < not_even.length; k++)
        result.push(not_even[k]);
    return result;
};
module.exports = even_asc_odd_desc;
