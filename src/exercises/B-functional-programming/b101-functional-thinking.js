
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
const backendApiRequest = () => ['marian', 'stefan', 'jadwiga', 'henryka', 'anna', null];

// Solution:
const response = backendApiRequest();

//if(null) {
//    console.log('hello')
// }

// !!'hello' //?
// Boolean('hello') //?

// backendApiRequest().filter((n) => !!n) //?
// 1:

// Imperative approach:
// const result = [];
// for(let name of response) {
//     const firstLetter = name.charAt(0).toUpperCase();
//     const rest = name.slice(1)
//     result.push(firstLetter + rest)
// }
// console.log(result);

// 'marian'.padStart(20, '.') //?
// ''.charAt(0) //?
// ''[0] //?

export function capitalize(name) {
    const firstLetter = name.charAt(0).toUpperCase();
    const rest = name.slice(1)
    return firstLetter + rest;
}
export const padWithDots = (name) => name.padStart(20, '.'); 
export const isNotFalsy = (value) => Boolean(value);

const uppercaseNames = response
                        .filter(isNotFalsy)
                        .map(capitalize)
                        .map(padWithDots)
                        .join('\n')
                        
console.log(uppercaseNames);

console.log(typeof 'sheheh')
console.log(typeof 123213)
console.log(typeof null)

console.log(isNotFalsy(0))
console.log(isNotFalsy('hello'))
console.log(padWithDots('krysia'))

// 'you might like'.charAt(2); //?
// 'something'.slice(3); //?
// 'something'[1] //?
