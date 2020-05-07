import { /*Observable, */ from, of } from 'rxjs';

/**
  #Task:
  Demonstrate the possibility of creating an observable as:
  interval, array, string, Object
  the difference between "of" and "from"

  #Goal:
  You can create an observable collection from any JavaScript elements using static operators (helpers)
*/

import { from, of } from 'rxjs';


const vegetable = 'tomato';
const fruits = ['apples', 'bananas', 'mangoes', 'cherries'];

const vegetable$ = of(vegetable);
const fruits$ = from(fruits);


vegetable$.subscribe((veg) => {
     console.log(veg)
}, (/*err*/)=> {}, () => {
    console.log('complete')
})

fruits$.subscribe((fruit) => {
    console.log(fruit)
})

// const vegetable$ = new Observable( (observer) => {


//     fruits.forEach((f) => {
//         observer.next(f);
//     })

//     observer.next(vegetable);
//     observer.complete();
// })

// vegetable$.subscribe((veg) => {
//     console.log(veg)
// })

