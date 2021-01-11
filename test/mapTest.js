const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  
  it("first character from an array of strings", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("add 1 to an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    assert.deepEqual(map(numbers, number => number + 1), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it("check if colors in an array is equal to blue", () => {
    const colors = ["blue", "green", "red", "orange", "yellow"];
    assert.deepEqual(map(colors, color => color === "blue" ? true : false), [true, false, false, false, false]);
  });

});