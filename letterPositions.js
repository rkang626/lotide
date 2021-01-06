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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

// test cases
const results1 = letterPositions("hello");
console.log(results1);
assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["l"], [2, 3]);
assertArraysEqual(results1["o"], [4]);