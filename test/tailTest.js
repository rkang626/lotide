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