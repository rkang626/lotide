const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  
  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("works when empty array is inputted to remove", () => {
    assert.deepEqual(without(["a", "b", 1], []), ["a", "b", 1]);
  });

});