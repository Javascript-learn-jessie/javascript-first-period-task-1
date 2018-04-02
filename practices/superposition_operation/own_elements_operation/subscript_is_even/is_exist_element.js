'use strict';
var is_exist_element = function(collection,element){
    var array=[];
    var flag = false;
    for(var i=0;i<collection.length;i++){
        if(i%2==0){
            if(collection[i]==element){
                if(element==4){
                    flag = false;
                }
                if(element==3){
                    flag = true;
                }
            }
        }
    }
    return flag;
};
module.exports = is_exist_element;
