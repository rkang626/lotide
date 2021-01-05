const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
}

const eqArrays = function(arrayOne, arrayTwo) {

  let equal = true;

  if (arrayOne.length !== arrayTwo.length) {
    equal = false; 
  } else {
    for (i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false;
      }
    }
  }

  return equal;

}

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], []), false); // => should NOT PASS