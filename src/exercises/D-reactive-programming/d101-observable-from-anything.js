import { Observable } from 'rxjs'

/**
  #Task:
  Receive values from observable and show on the console.
  What happens if we have several consumers?

  #Goal:
  Showing that Observable can be created from any - even synchronous values

  #Porównaj:
  ../C-asynchronous-concepts/c206-promise-from-anything.js
*/

// PROVIDER
 const number$ = new Observable( (observer) => {

    observer.next(1234);
    observer.complete();
  })

  number$.subscribe(
    (n) => {
        console.log(n)
    },
    (/*err*/) => {

    },
    () => {
        console.log('completed!')
    }
  );

  number$.subscribe((n) => {
      console.log(n)
  });
// CONSUMER:


