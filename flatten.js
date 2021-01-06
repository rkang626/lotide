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

const flatten = function(array) {
  let flattened = [];
  for (let elm of array) {
    if (Array.isArray(elm)) {
      for (let e of elm) {
        flattened.push(e);
      }
    } else {
      flattened.push(elm);
    }
  }
  return flattened;
};

// test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);