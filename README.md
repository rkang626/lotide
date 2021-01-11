# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rkang626/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assertion for two arrays
* `assertEqual(...)`: assertion for two values
* `assertObjectsEqual(...)`: assertion for two objects
* `head(...)`: returns the first item in an array
* `tail(...)`: returns the array without the first item
* `middle(...)`: returns the middle item(s) of the array
* `countLetters(...)`: returns an object with the count of each letter in a string
* `countOnly(...)`: returns an object with the count of specified items in an array
* `eqArrays(...)`: checks if two arrays are equal
* `eqObjects(...)`: checks if two objects are equal
* `findKey(...)`: returns the first key of an object where the value meets a provided condition
* `findKeyByValue(...)`: returns the first key of an object where the value is equal to an input
* `flatten(...)`: flatten a nested array
* `letterPositions(...)`: returns an object with the index position of all letters in a string
* `map(...)`: apply a function to every item in an array
* `takeUntil(...)`: returns a new array with all items until the provided condition is met
* `without(...)`: returns a new array with specified items removed