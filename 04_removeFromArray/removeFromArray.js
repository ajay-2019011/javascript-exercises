//rest parameters for variadic functions in Javascript
//Variadic func- which accepts a variable number of arguments
const removeFromArray = function (arr, ...theArgs) {
  let i, j;
  for (i = 0; i < theArgs.length; i++){
    for (j = 0; j < arr.length; j++){
      if (arr[j] === theArgs[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
