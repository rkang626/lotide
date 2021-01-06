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

const middle = function(array) {
  const middleIndex = Math.ceil(array.length / 2) - 1;

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[middleIndex]];
  } else if (array.length % 2 === 0) {
    return array.slice(middleIndex, middleIndex + 2);
  } else {
    return undefined;
  }
}

// test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);