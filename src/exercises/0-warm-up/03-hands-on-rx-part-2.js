import { Observable } from 'rxjs'

// PROVIDER:
const number$ = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.complete();
})


const mySubscriber = {
	next(num) {
		console.log('I got:', num)
	},
	// error(err) {
	// 	console.error(err)
	// },
	// complete() {
	// 	console.log('I am completed')
	// }
}

// CONSUMER(s):
const subscription = number$.subscribe(mySubscriber)

subscription.unsubscribe();
