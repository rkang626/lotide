const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const baseballTeams = {
  losAngeles: 1,
  newYork: 2,
  chicago: 3
};

assertEqual(findKeyByValue(baseballTeams, 1), "losAngeles");
assertEqual(findKeyByValue(baseballTeams, 4), undefined);