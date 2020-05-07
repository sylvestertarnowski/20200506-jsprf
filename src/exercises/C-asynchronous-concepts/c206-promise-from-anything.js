
/**
  #Task:
  Just pick the values from promises and notice the difference between them.
  Show values on the console

  #Goal:
  Showing that Promise can be created from any - even synchronous data
*/

// PROVIDER 1:
const myPromise = new Promise( (resolve, reject) => {
   resolve(1234);
   resolve(7365);
});

// Consumer 1
// myPromise.then((num) => {
//     console.log(num)
// }) 
// // Consumer 2
// myPromise.then((num) => {
//     console.log(num)
// }) 

/// Promise.resolve(1234)

// PROVIDER 2:
const myAsyncPromise = new Promise( (resolve) => {
  setTimeout(() => {
    resolve(4321);
  }, 2000);
});

// #Hint:
// compare with example:
// Promise legacy api trick - promise can be also created from callbacks

