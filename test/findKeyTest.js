const assert = require('chai').assert;
const findKey = require('../findKey');

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const results2 = findKey({
  "Dodgers": { city: "Los Angeles" },
  "Yankees": { city: "New York" },
  "Cubs":    { city: "Chicago" },
  "Mets":    { city: "New York" }
}, x => x.city === "New York");

describe("#findKey", () => {
  
  it("works with numbers", () => {
    assert.strictEqual(results1, "noma");
  });

  it("works with strings", () => {
    assert.strictEqual(results2, "Yankees");
  });

});