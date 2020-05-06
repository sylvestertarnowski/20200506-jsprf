/**
  #Task:
  Show an array (string[]) containing only quotes,
  from all books, all users

  #Goal:
  Another task to illustrate the concept of functional programming
  Showing possibility of using small helper functions to solve the task.
*/

// fake API with data:
const api = {
  users: [
    {
      name: 'Michał',
      age: 34,
      books: [
        {
          name: 'The Two Towers',
          quote:
            'There is some good in this world, and it’s worth fighting for',
        },
        { name: 'Fight Club', quote: 'I don’t want to die without any scars.' },
        {
          name: 'C is fun',
          quote: 'memory leak..., memory leak..., memory leak...',
        },
      ],
    },
    {
      name: 'Wacława',
      age: 25,
      books: [
        {
          name: 'A Woman of No Importance',
          quote: 'Who, being loved, is poor?',
        },
        {
          name: 'To Kill a Mockingbird',
          quote: 'Most people are nice when you finally see them.',
        },
        {
          name: 'Autumn Leaves',
          quote:
            'It is better to be hated for what you are than to be loved for what you are not.',
        },
        { name: 'Cookbook', quote: 'add 2 eggs to the butter and flour' },
      ],
    },
  ],
};

function extractUserBooks({ books }) {
  return books;
}

function extractBookQuotes({ quote }) {
  return quote;
}

const pluck = (key) => (obj) => obj[key];

// Your solution:
const allQuotes = api.users.flatMap(pluck('books')).map(pluck('quote'));
console.log(allQuotes);
