import { Observable } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';

/**
  #Task:
  Receive values from observable and show on the console.
  What happens if we have several consumers?

  #Goal:
  Showing that Observable can be created from any - even synchronous values

  #Porównaj:
  ../C-asynchronous-concepts/c206-promise-from-anything.js
*/

const provider = new Observable((observer) => {
  observer.next(1234);
  observer.complete();
});

provider
  .pipe(
    delay(2000),
    map((val) => val * 2)
  )
  .subscribe((val) => console.log(val), () => {} , () => console.log('complete'));

provider.subscribe((val) => console.log(val));
