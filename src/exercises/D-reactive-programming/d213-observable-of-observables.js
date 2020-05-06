import { from, of } from 'rxjs'

/**
   #Task:
   Subscribe to observableOfObservables and prepare consuming of this subscription
   so that you can receive the "data collection" right away - not the Observables collection
   In other words: avoid nesting your subscription

   #Goal:
   The task illustrates how to deal with the observable collection, which emits other observable.
   Reminder of flattening a data collection.
 */

  // :
  const observableOfObservables = from([ of(1,2,3,4), of(2), of(90) ]);

  // Your solution:



