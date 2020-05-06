import { Observable } from 'rxjs'

// PROVIDER:
const number$ = new Observable((subscriber) => {
	subscriber.next(1);
	//subscriber.next(2);
	//subscriber.next(3);
})


// CONSUMER(s):
number$.subscribe((num) => {
	console.log('I got:', num);
})
