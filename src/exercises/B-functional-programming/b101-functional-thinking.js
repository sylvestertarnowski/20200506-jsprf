/**
 #Tasks:
 1. Change first letters of the names to uppercase and show as a new Table:
 ['Marian', 'Stefan', 'Jadwiga', 'Henryka', 'Anna']
 To show the data - use a console.log method

 2. What will you do if there were a change of requirements and you need to show in the console:
    ..............Marian
    ..............Stefan
    .............Jadwiga
    .............Henryka
    ................Anna


 3. World is not so colorful, what if we got a "null value" at the end of the initial list ?

 #Goal:
 Task illustrating that achieving the same goal can be obtained
 in several different ways (imperative, functional etc.)
*/

// Data came from back-end as table of strings:
const backendApiRequest = () => [
  'marian',
  'stefan',
  'jadwiga',
  'henryka',
  'anna',
  '',
  null
];
/** @param {string} value */
function isString(value) {
   return typeof value === "string"
}

// Solution:
const response = backendApiRequest().filter(n => n).map(
  (item) => item.charAt(0).toUpperCase() + item.slice(1)
);
console.log(response);

response.forEach((item) => console.log('.'.repeat(20 - item.length) + item));
