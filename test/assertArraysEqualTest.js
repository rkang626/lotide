const assertArraysEqual = require('../assertArraysEqual');

// test cases
console.log(assertArraysEqual([1, 1, 1], [1, 1, 1]));
console.log(assertArraysEqual([1, 1, 2], [1, 1, 1]));
console.log(assertArraysEqual([1, 1], [1, 1, 1]));