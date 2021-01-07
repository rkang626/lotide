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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// test cases

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assertArraysEqual(map(numbers, number => number + 1), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

const colors = ["blue", "green", "red", "orange", "yellow"];
assertArraysEqual(map(colors, color => color === "blue" ? true : false), [true, false, false, false, false]);