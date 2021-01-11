const takeUntil = function(array, callback) {
  let output = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      output.push(item);
    }
  }

  return output;
};

module.exports = takeUntil;