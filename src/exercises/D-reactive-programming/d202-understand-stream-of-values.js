import { fromEvent, Observable, interval, from } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

/**
  #Task:
  Convert to 3 data streams and subscribe, show results on the console

  #Goal:
  Consolidation and understanding that the concept of "Observables" refers to data streams.
  These streams can be created based on various data emitting objects.
*/

// Your solution:

// #1 ----------

const event$ = fromEvent(document, 'click')
event$.subscribe((val) => console.log('Event ', val));

// #2 ----------
let no = 0;
// const inter = setInterval(() => {
//   console.log(no++);
// }, 1000);
// setTimeout(() => {
//   clearInterval(inter);
// }, 4000);

const second$ = interval(1000);

const subscription = second$.subscribe(console.log);

setTimeout(() => {
  subscription.unsubscribe();
}, 4000)


// #3 ----------
const observableWannabeArray = ['this', 'also', 'can', 'be', 'Observable'];

const string$ = from(observableWannabeArray);

string$.subscribe(console.log)
