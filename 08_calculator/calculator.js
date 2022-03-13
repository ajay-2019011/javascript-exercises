const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let len = arr.length;
  let i, sum = 0;
  if (len == 0)
    return 0;
  for (i = 0; i < len; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let len = arr.length;
  let i, product = 1;
  for (i = 0; i < len; i++){
    product *= arr[i];
  }
  return product;
};

const power = function(a,b) {
  let i = 0,num=1;
  for (i = 0; i < b; i++){
    num = num * a;
  }
  return num;
};

const factorial = function(n) {
  let i = 1, factorial = 1;
  if (n == 0)
    return 1;
  for (i = 1; i <= n; i++){
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
