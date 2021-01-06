const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true;

  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return false;
  }

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if ((object1[key] !== object2[key] && !Array.isArray(object1[key])) || (!eqArrays(object1[key], object2[key]) && Array.isArray(object1[key]))) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ? `🔥🔥🔥 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `💦💦💦 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// test cases
console.log(assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" , c: "3"}));