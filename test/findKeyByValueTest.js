const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const baseballTeams = {
  losAngeles: 1,
  newYork: 2,
  chicago: 3
};

describe("#findKeyByValue", () => {
  
  it("works for numbers", () => {
    assert.strictEqual(findKeyByValue(baseballTeams, 1), "losAngeles");
  });

  it("works for strings", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined if value doesn't exist", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), undefined);
  });

});