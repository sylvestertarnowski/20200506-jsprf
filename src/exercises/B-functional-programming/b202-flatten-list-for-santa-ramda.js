import assert from 'assert'
import { pipe, pluck, flatten, sum, curry, __ } from 'ramda'

function sum3things(a, b, c) {
    return a + b + c;
}

sum3things(1, 1, 1) //?
sum3things(1, 1, 10) //?

const currySum3Things = curry(sum3things);

currySum3Things(1, 1, 1) //?
currySum3Things(1, 1)(10) //?
currySum3Things(2)(10)(100) //?


currySum3Things('a', 'b', 'c') //?
currySum3Things('a', __, 'c')('b') //?
currySum3Things(__, __, 'c')('a','b') //?


/**
  #Task:
  Calculate what budget Santa must have to buy gifts for children.

  #Goal:
  Getting to know the "Ramda" library, which can work on the principle of "pipeline".
*/

const santaList = {
  children: [
    {
      name: 'Cris',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Bianca',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Arnold',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
    {
      name: 'Stephanie',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 77},
      ]
    },
    {
      name: 'Ana',
      wishList: [
        {name: '', price: 123},
        {name: '', price: 27},
      ]
    },
  ]
};

// const sum2 = (arr) => (a, b) => a + b;

// Your solution:
const cashAmount = pipe(
    pluck('wishList'),
    flatten(),
    pluck('price'),
    sum
)(santaList.children);



// Check the correctness:
console.log('Hello Santa, you have to prepare: ', cashAmount, 'zł, to buy all the gifts');
assert(typeof cashAmount === 'number');
assert(cashAmount === 800);

