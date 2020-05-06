import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

import { $ } from '../../dom-api/selector'
  /**
    #Task:
    Subscribe to the stream of seconds using the prepared buttons.
    After pressing the sub1StartBtn button - we start subscription 1
    After pressing the sub2StartBtn button - we start subscription 2

    We will show the results of the subscription (what comes to us on the stream) in:
    {@see sub1ResultH6} and {@see sub2ResultH6}

    After connecting the events and preparing the subscription, press the sub1StartBtn button
    BEFORE you press the sub2StartBtn button - try to guess what will be show in sub2ResultH6;

    #Goal:
    Understanding how streams work when you subscribe.
    Getting to know how to make "hot observable" from "cold observable".
    Reminder: fromEvent, using the switchMap operator (avoiding subscription nesting)
  */

  // Helper DOM selectors:
  const btn1 = $('button#btn1');
  const btn2 = $('button#btn2');
  const h6Result1 = $('h6#result1');
  const h6Result2 = $('h6#result2');

  // Stream
  const second$ = interval(1000).pipe( take(20) );

  // Your solution:



