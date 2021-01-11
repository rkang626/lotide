const flatten = function(array) {
  let flattened = [];
  for (let elm of array) {
    if (Array.isArray(elm)) {
      for (let e of elm) {
        flattened.push(e);
      }
    } else {
      flattened.push(elm);
    }
  }
  return flattened;
};

module.exports = flatten;