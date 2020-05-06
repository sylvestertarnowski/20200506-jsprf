
/**
 #Task:
 Discover / remind yourself the possibilities of using API for arrays

 #Goal:
 Strengthening the principles of functional programming:
 No input data mutation, small functions, step by step to goal, code reusability.
 Getting familiar with other higher order functions for arrays

 more:
 {@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
 */

// Iteration over elements
[1,2,3,4,5].forEach(element => {
  console.log(element);
});

// Mapping
// Element transformation
const mapped = [1,2,3,4,5].map((nr) => 'Chapter #'+nr);
console.log(mapped);

// Filtering
// Change number of elements (narrow down)
const oddNumbers = [1,2,3,4,5].filter((nr) => (nr%2));
console.log(oddNumbers);

// Checking condition
// Every element fulfill the predicate
const allLowerThan10 = [1,2,3,4,5].every((nr) => nr < 10);
console.log(allLowerThan10);

// Elements "Reduction"
// Where map and filter can't help - use reduce!
const sumOfElements = [1,2,3,4,5].reduce((acc, value) => ({...acc, [value]: value }) , {});
console.log(sumOfElements);

// Mapping and then flattening the array
const elements = [1, 2, 3];
console.log(elements.flatMap((e) => [e, e ** 2]))

