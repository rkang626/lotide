const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  
  it("returns true for equal unnested arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for unequal unnested arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns true for equal nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for unequal nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 4], [4]]), false);
  });

});