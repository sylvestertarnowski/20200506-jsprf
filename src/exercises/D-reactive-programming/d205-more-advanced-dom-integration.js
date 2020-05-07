import '@babel/polyfill';

import { $ } from '../../dom-api/selector';
import { li } from '../../dom-api/make-dom';
import { interval } from 'rxjs';
import { take, scan, filter, startWith, map } from 'rxjs/operators';

/**
  #Task:
  Show the next person entering the room every 2 seconds.
  Next to it, show the elapsed time every second

  Do we need two intervals for this?

  #Goal:
  Consolidation: how the stream behaves and how we can modify the subscription.
*/

// Helper: Lawyer generator:
function* pearsonSpecterLittGenerator() {
  yield 'Jessica Pearson';
  yield 'Harvey Specter';
  yield 'Louis Litt';
}
// Helper: the iterator
const lawyerEnter = pearsonSpecterLittGenerator();

// Helper DOM selectors:
const myUlList = $('#ulLawyers');
const h2Timer = $('#timer');
const divAlertTimerOver = $('#alertTimeOver');
divAlertTimerOver.style.visibility = 'hidden';

// Helper: making the <li> element with text
const makeLawyer = (name) => li(name);

// Your solution:

const second$ = interval(1000).pipe(
  map((v) => v + 1),
  take(6),
  startWith(0)
);

second$.subscribe((v) => (h2Timer.textContent = v), () => {}, () => {
    divAlertTimerOver.style.visibility = 'visible';
    divAlertTimerOver.textContent = 'Time is up!';
});

second$.pipe(filter((v) => v % 2 === 0 && v >= 2)).subscribe(() => {
  const lawyer = lawyerEnter.next().value;
  if (lawyer) {
    myUlList.appendChild(makeLawyer(lawyer));
  }
});

