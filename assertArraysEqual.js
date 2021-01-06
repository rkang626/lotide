const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true;
  if (arrayOne.length !== arrayTwo.length) {
    equal = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false;
      }
    }
  }
  return equal;
};

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected) ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

// test cases
console.log(assertArraysEqual([1, 1, 1], [1, 1, 1]));
console.log(assertArraysEqual([1, 1, 2], [1, 1, 1]));
console.log(assertArraysEqual([1, 1], [1, 1, 1]));