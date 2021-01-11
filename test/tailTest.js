const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] for ["Yo Yo"]', () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('original array is not altered', () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"]
    tail(words);
    assert.strictEqual(words.length, 3);
  });

});

// test cases
// let words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// words = ["Yo Yo"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 1); // original array should still have 3 elements!

// words = [];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 0); // original array should still have 3 elements!