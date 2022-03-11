const sumAll = function(first, second) {
  let small, big;
  if (typeof (first) != 'number' || typeof (second) != 'number')
    return 'ERROR';
  
  if (first < 0 || second < 0)
    return 'ERROR';
  
  if (first < second) {
    small = first;
    big = second;
  }
  if(first > second) {
    small = second;
    big = first;
  }
  let i, sum=0;
  for (i = small; i <= big; i++){
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
