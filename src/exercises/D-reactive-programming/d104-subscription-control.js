import { interval } from 'rxjs'

/**
  #Task:
  End subscription after 3 seconds.

  #Goal:
  It is important to terminate the subscription if you no longer need it.
  Just like we need to do clearInterval or clearTimeout in JavaScript.
  Here, too, we cannot allow to "memory leaks"
*/

const number$ = interval(1000);

number$.subscribe((no) => {
  console.log('My number is', no)
});

