const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, current) => total + current, 0);
};

const multiply = function(a) {
  return a.length
  ? a.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0) return 1;
  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
