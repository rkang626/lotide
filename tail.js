const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check the original array
let words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = ["Yo Yo"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 1); // original array should still have 3 elements!

words = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 0); // original array should still have 3 elements!