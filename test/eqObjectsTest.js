const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  
  it("returns true for equal unnested objects", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it("returns false for unequal unnested objects", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1", c: "3" }), false);
  });

  it("returns true for equal nested objects", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { b: 2, a: { z: 1 } }), true);
  });

  it("returns false for unequal nested objects", () => {
    assert.strictEqual(eqObjects({ a: { z: [1, 2] }, b: 2 }, { b: 2, a: { z: [2, 1] } }), false);
  });

});