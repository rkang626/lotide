const assert = require('chai').assert;
const countLetters = require('../countLetters');

// test cases
const testString = 'Aaaa bbb cc d';
const result1 = countLetters(testString);

describe("#countLetters", () => {
  
  it("returns 1 for 'A''", () => {
    assert.strictEqual(result1["A"], 1);
  });

  it("returns 3 for 'a''", () => {
    assert.strictEqual(result1["a"], 3);
  });

  it("returns 3 for 'b''", () => {
    assert.strictEqual(result1["b"], 3);
  });

  it("returns 2 for 'c''", () => {
    assert.strictEqual(result1["c"], 2);
  });

  it("returns 1 for 'd''", () => {
    assert.strictEqual(result1["d"], 1);
  });

});