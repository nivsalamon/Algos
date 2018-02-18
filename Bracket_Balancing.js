var bracketbalancing = function(string){
  var object = {
    "[":"]",
    "{":"}",
    "(":")"
  };

  var array = string.split('');
  var keys = ["[","{","("];
  var values = ["]","}",")"];

  var storage = [];

  for(var i = 0; i < string.length; i++){
    if( keys.includes(string[i]) ){
      storage.push(object[string[i]]);
    } else {
      //the closing must is not the last in storage
      if(string[i] !== storage[storage.length-1]){
        return false;
      } else { // the closing is the last in the storage
        storage.pop();
      }
      storage[storage.length-1]
    }
  }
  return true;
}

bracketbalancing("{[()]}");
