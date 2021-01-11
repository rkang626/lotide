const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {

  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return false;
  }

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i])) {
        if (!eqArrays(arrayOne[i], arrayTwo[i])) {
          return false;
        }
      } else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqArrays;