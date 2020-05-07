/**
 *
 * 1. Using the conventions learned yesterday, propose a solution
 *    counting all "value" in the basket and presenting the sum of the elements in the basket.
 *    Watch out for deliberate "null" and "undefined" traps
 *
 *    If you make the helper functions well, you can easily solve
 *    2nd task in similar manner (using these functions):
 *
 * 2. Do the same thing, however - by converting the data to a stream:
 *
 *    a) Import the 'rxjs' library, the appropriate static operator to convert
 *    cartItems for the stream of subsequent items in the cart.
 *
 *    b) Knowing that you can use operators in .pipe() that are similar in way of working
 *    to those known to you from array:
 *    `filter(() => {})` , `map(() => {})`, `reduce(() => {})`
 *    use in .pipe() importing them from 'rxjs/operators'
 *
 *    c) Finally calling `.subscribe()` we should see final result in the callback
 *    sum of the items in the basket
 */

// Real life example:
const cartItems = [
    {name: 'Backpack', value: 450},
    null,
    {name: 'Binoculars', value: 199.99},
    {name: 'Canned tuna', value: 3.64},
    undefined,
    {name: 'Climbing Rope', value: 20},
    {name: 'Bolts', value: 11.27},
]

// -----------------------------------
// Solution for #1:

const cartSum = cartItems;

console.log(cartSum);
// Suppose to be:
// console.log(cartSum) //? 684.9


// Solution for #2:
const cartSum$ = cartItems;
