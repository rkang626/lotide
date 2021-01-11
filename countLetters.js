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

module.exports = countLetters;