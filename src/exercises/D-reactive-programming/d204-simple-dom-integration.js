import { $ } from '../../dom-api/selector'
import { fromEvent } from 'rxjs';
import { reduce, mapTo, scan, startWith} from 'rxjs/operators'

/**
  #Task:
  After clicking on the document, count the number of clicks in h2Counter.

  #Goal:
  Showing the basic possibilities of interacting with the DOM by creating a stream of events.
  Strengthening the use of helpers and operators, getting to know more operators.
*/


// Helper DOM selector:
const h2Counter = $('#counter');

// Your solution:

const click$ = fromEvent(document, 'click');

const sum = (a,b) => a + b;

click$.pipe(mapTo(1), startWith(100), scan(sum)).subscribe((val) => {
  h2Counter.textContent = val
})