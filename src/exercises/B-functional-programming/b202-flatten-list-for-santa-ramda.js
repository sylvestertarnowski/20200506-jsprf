import assert from 'assert';
import { pipe, pluck, flatten, sum, curry } from 'ramda';

function sumThreeThings(a, b, c) {
  return a + b + c;
}

sumThreeThings(1, 2, 3) //?

const currySumThreeThings = curry(sumThreeThings);

currySumThreeThings(1)(2)(3) //?

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
        { name: '', price: 123 },
        { name: '', price: 27 },
      ],
    },
    {
      name: 'Bianca',
      wishList: [
        { name: '', price: 123 },
        { name: '', price: 27 },
      ],
    },
    {
      name: 'Arnold',
      wishList: [
        { name: '', price: 123 },
        { name: '', price: 27 },
      ],
    },
    {
      name: 'Stephanie',
      wishList: [
        { name: '', price: 123 },
        { name: '', price: 77 },
      ],
    },
    {
      name: 'Ana',
      wishList: [
        { name: '', price: 123 },
        { name: '', price: 27 },
      ],
    },
  ],
};

// Your solution:
const cashAmount = pipe(
  pluck('wishList'),
  flatten(),
  pluck('price'),
  sum()
)(santaList.children);

// Check the correctness:
console.log(
  'Hello Santa, you have to prepare: ',
  cashAmount,
  'zł, to buy all the gifts'
);
assert(typeof cashAmount === 'number');
assert(cashAmount === 800);
