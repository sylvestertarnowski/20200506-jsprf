
/**
  #Task:
  Change the syntax to "synchronous" without breaking current API

  #Goal:
  Learn how to use new async / await syntax for promises

  http://exploringjs.com/es2016-es2017/ch_async-functions.html
*/

const newYorkLawFirmAPI = {

  fetchLawyers () {
    return new Promise((resolve) => {
        resolve( [
          { id: 0, fullName: 'Jessica Pearson' },
          { id: 1, fullName: 'Louis Litt' },
          { id: 2, fullName: 'Samantha Wheeler' },
          { id: 3, fullName: 'Rachel Zane' },
        ] )
      }
    );
  }
};

// async
  newYorkLawFirmAPI
    .fetchLawyers()
    .then(
      (lawyers) => console.log(lawyers)
    );

// Your solution:

