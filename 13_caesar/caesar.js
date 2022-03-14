const caesar = function(string, shift) {
  let result = '';
  let i,ascii,gap;
  for (i = 0; i < string.length; i++){
    ascii = string.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      ascii = ascii + shift;
      while (ascii > 90) {
        gap = ascii - 91;
        ascii = 65 + gap;
      }
      while (ascii < 65) {
        ascii = ascii + 26 ;
      }
    }
    else if (ascii >= 97 && ascii <= 122) {
      ascii = ascii + shift;
      while (ascii > 122) {
        gap = ascii - 123;
        ascii = 97 + gap;
      }
      while (ascii < 97) {
        ascii = ascii + 26;
      }
    }
    else
      ascii = ascii + 0;
    
    result = result + String.fromCharCode(ascii);
  }
  return result;
};

// Do not edit below this line
module.exports = caesar;
