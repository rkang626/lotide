const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `🔥🔥🔥 Assertion Passed: ${actual} === ${expected}` : `💦💦💦 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  let equal = true;

  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return false;
  }

  if (arrayOne.length !== arrayTwo.length) {
    equal = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        equal = false;
      }
    }
  }

  return equal;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if ((object1[key] !== object2[key] && !Array.isArray(object1[key])) || (!eqArrays(object1[key], object2[key]) && Array.isArray(object1[key]))) {
        return false;
      }
    }
  }

  return true;
};

// test cases

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

const first = { a: { z: 1 }, b: 2 };
const second = { b: 2, a: { z: 1 } };
assertEqual(eqObjects(first, second), true);

const third = { a: { z: [1, 2] }, b: 2 };
const fourth = { b: 2, a: { z: [1, 2] } }
assertEqual(eqObjects(third, fourth), true);

const fifth = { a: { z: [1, 2], c: { d: 3 } }, b: 2 };
const sixth = { b: 2, a: { z: [1, 2], c: { d: 3 } } } 
assertEqual(eqObjects(fifth, sixth), true);