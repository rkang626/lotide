const assert = require('chai').assert;
const countOnly = require('../countOnly');

// test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  
  it("returns count when item is set to true in itemsToCount", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined when itemsToCount is not included in allItems", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns undefined when item is set to false in itemsToCount", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});