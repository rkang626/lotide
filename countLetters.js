const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(inputString) {
  const results = {};

  for (const char of inputString) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
};

// test cases
const testString = 'Aaaa bbb cc d';

const result1 = countLetters(testString);

assertEqual(result1["A"], 1);
assertEqual(result1["a"], 3);
assertEqual(result1["b"], 3);
assertEqual(result1["c"], 2);
assertEqual(result1["d"], 1);