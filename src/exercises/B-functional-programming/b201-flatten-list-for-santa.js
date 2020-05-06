import assert from 'assert'

/**
  #Task:
  Calculate what budget Santa must have to buy gifts for children.

  #Goal:
  Entry to the so-called PIPES - shows the relationship between the task that you can complete step by step
  and helper functions we have previously defined.
  Discovering the relationship, we can make our own pipeline!
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

const pluck = (key) => (obj) => obj[key]
const sumAllPrices = (acc, val) => acc + val

// Your solution:
const cashAmount = santaList.children.flatMap(pluck('wishList')).map(pluck('price')).reduce(sumAllPrices);



// Check the correctness:
console.log(cashAmount);
console.log('Hello Santa, you have to prepare: ', cashAmount, 'zł, to buy all the gifts');
assert(typeof cashAmount === 'number');
assert(cashAmount === 800);

