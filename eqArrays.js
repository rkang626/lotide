const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayOne, arrayTwo) {

  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return false;
  }

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i])) {
        if (!eqArrays(arrayOne[i], arrayTwo[i])) {
          return false;
        }
      } else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }

  return true;
};

// test cases
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should NOT PASS
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should NOT PASS
// assertEqual(eqArrays([1, 2, 3], []), false); // => should NOT PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => should PASS