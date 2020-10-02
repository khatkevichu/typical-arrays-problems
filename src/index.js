
exports.min = function min (array) {
 let min = array[0];
 for(let i = 1; i < array.length; i++){
   if(array[i] < min){
     min = array[i];   
   } else if(array.lenght == 0){
     min = 0;
   }
  }
return min;
}

exports.max = function max (array) {
 let max = array[0];
 for(let i = 1; i < array.length; i++){
   if(array[i] > max){
     max = array[i];   
   } else if(array.lenght == 0){
     max = 0;
   }
  }
return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  let count = array.length;
  for (i =0; i<count; i++) {
    sum += array[i];
  }
  return sum/count;
}
