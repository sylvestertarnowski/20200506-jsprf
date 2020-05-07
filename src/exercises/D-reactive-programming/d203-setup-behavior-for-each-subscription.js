/**
    #Task:
    Create 4 subscriptions that will show the following on the console every second:
        1. 1-2-3|
        2. ('Hello')-('Hello !')-('Hello !!')-('Hello !!!')|
        3. 2-4-6-8-10|
        4. 10-20--40|

    #Goal:
    Understanding that each subscription, even for the same stream - can have its own unique behavior
    through the use of operators
*/

import { interval } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

const interval$ = interval(1000);

interval$
  .pipe(
    take(3),
    map((v) => v + 1)
  )
  .subscribe(console.log);
interval$
  .pipe(
    take(4),
    map((v) => 'Hello '.padEnd('Hello '.length + v, '!')),
    map((v) => v.trim())
  )
  .subscribe(console.log);
interval$
  .pipe(
    map((v) => (v + 1) * 2),
    take(5)
  )
  .subscribe(console.log);
interval$
  .pipe(
    map((v) => (v + 1) * 10),
    filter((v) => v !== 30),
    take(3)
  )
  .subscribe(console.log);
