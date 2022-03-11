const repeatString = function (string, num) {
  if (!string)
    return '';
  if (num < 0)
    return 'ERROR';
  if (num == 0)
    return '';
  let resultString=string;
  for (let i = 1; i < num; i++){
    resultString+=string;
  }
  //let resultString = arrayOfStrings.toString();
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
