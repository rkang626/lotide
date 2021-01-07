const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(results1, "noma");

const results2 = findKey({
  "Dodgers": { city: "Los Angeles" },
  "Yankees": { city: "New York" },
  "Cubs":    { city: "Chicago" },
  "Mets":    { city: "New York" }
}, x => x.city === "New York");
assertEqual(results2, "Yankees");