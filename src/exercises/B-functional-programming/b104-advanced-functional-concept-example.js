
/**
 #Task:
 Krysia buys new Dolby Surround equipment.
  After some time, she decides to buy a better SubWoofer.
  1. We need our "sumItems" function to handle subtotals. Because purchases are made separately.
     In other words, Krysia does not know how much the SubWoofer will cost and the "sumItem" function must wait.
  2 *. What if we need to have both functionalities for "sumItems": "synchronous" and "asynchronous" purchase

 #Goal:
 More advanced function usage.
 Getting to know the curry concept in JavaScript

 "How does function return functions?" :)
 "How does function receive a function?" :)
 */

const homeCinema = { item: 'DolbySurround Home Cinema', price: 1500 };
const subWoofer  = { item: 'A better SubWoofer', price: 500 };


// Your solution:
function sumItems(a, b) {
    return a + b;
}

// synchronous obviously, looks like that:
sumItems(homeCinema.price, subWoofer.price) //?
