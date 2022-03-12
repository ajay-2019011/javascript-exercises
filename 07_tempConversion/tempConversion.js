const ftoc = function(fahreinheit) {
  let celsius;
  celsius = (5 / 9) * (fahreinheit - 32);
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(celsius) {
  let fahreinheit;
  fahreinheit = (9 / 5) * celsius + 32;
  return parseFloat(fahreinheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
