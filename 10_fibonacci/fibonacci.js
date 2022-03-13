const fibonacci = function (m) {
  let n = parseInt(m);
  let num1 = 1, num2 = 1, i, nth;
  if (n < 0)
    return 'OOPS';
  if (n == 1 || n == 2)
    return 1;
  for (i = 3; i <= n; i++){
    num1 = num1 + num2;
    num2 = num1-num2;
  }
  nth = num1;
  return nth;
};

// Do not edit below this line
module.exports = fibonacci;
