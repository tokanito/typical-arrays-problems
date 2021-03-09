
exports.min = function min (array) {
  var min=0;
    if (typeof array=='object'){
      if (array.length !== 0){
    
    for (var i=0; i<array.length; i++){
      if (array[i]<min){
        min=array[i];
      }
    }
    
   
    }
  }
 return min;
  }

exports.max = function max (array) {
var max=0;
if (typeof array =='object'){
  if (array.length !== 0){
    for (var i=0; i<array.length; i++){
      if (array[i]>max){
        max=array[i];
      }
    }
        
    }
  }
return max;
}

exports.avg = function avg (array) {
var avg=0;
if (typeof array =='object'){
  if (array.length !== 0){
    var summ=0;
	
    for (var i=0; i<array.length; i++){
      summ=summ+array[i];
    }
      avg=summ/array.length
      
    }
  }
return avg;
}
