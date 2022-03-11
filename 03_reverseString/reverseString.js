const reverseString = function (string) {
  if (!string)
    return string;
  let splitStrings = string.split(" ");
  //If there is only a single word in string, then after this splitting
  //Will the single word be represented as splitStrings[0]?
  for (let i = 0; i < splitStrings.length; i++) {
    let splitString = splitStrings[i].split("");
    let reverseSplitString = splitString.reverse();
    let finalReverseString = reverseSplitString.join("");
    splitStrings[i] = finalReverseString;
  }
  let reverseStrings = splitStrings.reverse();
  let finalReverseStrings = reverseStrings.join(" ");
  return finalReverseStrings;
};

// Do not edit below this line
module.exports = reverseString;
