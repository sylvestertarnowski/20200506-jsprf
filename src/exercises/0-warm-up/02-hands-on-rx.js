import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

const arrayNumber$ = new Observable((s) => {
    for(let n of [1, 10, 20, 30, 40, 6, 4, 3]){
        s.next(n)
    }
})

arrayNumber$.subscribe((num) => {
    console.log(num)
})

arrayNumber$.pipe(filter(n => n > 10)).subscribe((num) => {
    console.log(num)
})

// PROVIDER:
const number$ = new Observable((subscriber) => {
	// subscriber.next(1);
    // subscriber.next(20);
    
    ///subscriber.error(new Error('Oh no!'));
    //subscriber.complete();
    //subscriber.next(200);
    try {
        JSON.parse('.') 
    } catch (e) {
        // subscriber.error(e);
    }
    
    setTimeout(() => {
         subscriber.next(120);
    }, 20)
	//subscriber.next(3);
})


// CONSUMER(s):

number$.subscribe((num) => {}, (err) => {}, () => {})
/*
number$.subscribe(
    (num) => {    
	    console.log('I got:', num);
    },
    (err) => {
	    console.log(err);
    },
    () => {
	    console.log('I am completed') 
    }
)

const sub = number$.subscribe((num) => {
    console.log('I have:', num);
})
sub.unsubscribe();

number$.subscribe((num) => {
    console.log('I have:', num);
})

number$.subscribe((num) => {
    console.log('I have:', num);
}) */
