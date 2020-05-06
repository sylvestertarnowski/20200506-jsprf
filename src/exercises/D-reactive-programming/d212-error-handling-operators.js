import { interval } from 'rxjs'
import { map, take } from 'rxjs/operators'

import { button, div, h2, h6 } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'

  /**
   #Task:
   After clicking the startBtn button, start the stream {@see number$}.
   Make error handling using errorWrapper and errorBox.

   #Goal:
   "Previewing" stream values thanks to the tap operator.
   Understanding RxJS error handling using operators:
   catchError, finalize, retry
   */

  // Helper DOM wrappers:
  const startBtn = button('Start !', ['btn','btn-success', 'mr-2']);
  const goUpResultH6 = h6('-');
  const errorWrapper = div();
  const errorBox = div([], ['alert', 'alert-danger']);

  const number$ = interval(500).pipe(
    map(no => {
      if(no > 4) {
        throw new Error('Level too high !')
      } else {
        return no;
      }
    }),
    take(20)
  );

  // Your solution:


  // HTML Boilerplate:
  const $root = $('main');
  const divRow = div([
    div([
      startBtn
    ], ['col-6', 'text-center', 'mt-5']),
    div([
      h2('Im going up to floor:'),
      goUpResultH6,
      errorWrapper
    ], ['col-6', 'text-center']),
  ], ['container', 'row']);
  $root.appendChild(divRow);

