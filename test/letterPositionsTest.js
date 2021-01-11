const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  const results1 = letterPositions("hello");
  
  it("returns correct position when letter shows up once", () => {
    assert.deepEqual(results1["h"], [0]);
  });

  it("returns correct position when letter shows up more than once", () => {
    assert.deepEqual(results1["l"], [2, 3]);
  });

});