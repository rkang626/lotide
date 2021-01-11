const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], []), false); // => should NOT PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => should PASS