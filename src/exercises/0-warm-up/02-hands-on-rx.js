import { Observable } from 'rxjs';

// PROVIDER:
const number$ = new Observable((subscriber) => {
  subscriber.next(() => setTimeout(() => console.log(50), 2000));
	// subscriber.error(new Error('oh no'))
  subscriber.complete();
});

// CONSUMER(s):
number$.subscribe(
  (num) => console.log('I got:', num()),
  (err) => console.log(err),
  () => console.log('Complete')
);
