
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

const observableVeg = of(vegetable);
const observableFruits = from(fruits);

observableVeg.subscribe(val => console.log(val), (e) => {console.log(e)}, () => console.log('COmplete'))
observableFruits.subscribe(val => console.log(val), (e) => {console.log(e)}, () => console.log('COmplete'))

