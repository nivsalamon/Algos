var bubbleSort = function(array) {
  var swaps = false;

  while(!swaps) {
    swaps = true;
    for(var i = 0; i < array.length-1; i++){
      if(array[i] > array[i+1]) {
        swaps = false;
        [array[i], array[i+1]] = [array[i+1], array[i]];
      }
    }
  }
  return array;
}
