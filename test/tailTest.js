const assertEqual = require('../assertEqual');
const tail = require('../tail');

// test cases
let words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = ["Yo Yo"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 1); // original array should still have 3 elements!

words = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 0); // original array should still have 3 elements!