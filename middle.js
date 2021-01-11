const middle = function(array) {
  const middleIndex = Math.ceil(array.length / 2) - 1;

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[middleIndex]];
  } else if (array.length % 2 === 0) {
    return array.slice(middleIndex, middleIndex + 2);
  } else {
    return undefined;
  }
};

module.exports = middle;