const palindromes = function (inputS) {
  let outputS = '';
  let i = 0, len = inputS.length;
  let inputLower = inputS.toLowerCase();
  for (i = 0; i < len; i++){
    if (inputLower[i] >= 'a' && inputLower[i] <= 'z') {
      outputS = outputS + inputLower[i];
    }
  }
  for (i = 0, j = outputS.length-1; i < outputS.length,j>=0; i++,j--){
    if (outputS[j] != outputS[i])
      return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
