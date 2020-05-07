import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
  #Task:
  End subscription after 3 seconds.

  #Goal:
  It is important to terminate the subscription if you no longer need it.
  Just like we need to do clearInterval or clearTimeout in JavaScript.
  Here, too, we cannot allow to "memory leaks"
*/

const number$ = interval(500);

const subscription = number$.pipe(take(6)).subscribe((no) => {
  console.log('My number is', no);
}, () => {}, () => console.log('Complete'));

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);

/*
let x = 0;
const inter = setInterval(() => {
    console.log('My number is', x++)
}, 1000)

setTimeout(() => {
    clearInterval(inter)
}, 3000)
*/
