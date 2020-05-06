import { Observable, Subject } from 'rxjs'

class MySuperService {

  constructor () {
    this.myData = 'some-static-data';
    this.subject = new Subject();
  }

  getData () {
    return this.subject;
  }

  fire () {

  }
}
  /**
    #Task:
    Control behavior of the stream in the MySuperService class.
    Create an instance of it and add logic to the "fire()" method.
    Show correctness of the result by subscribing to "getData()"

    What if we would like to have the last known value right after subscribing?

    #Goal:
    Getting to know the simplest way to make a decision when to broadcast data in our application logic.
    Specifying the Subject behavior that is both Observer and Observable.
  */

  // Recall the construction:
  // What limitations does it have?
  new Observable( (observer) => {

    observer.next(1234);
  });

  // Your solution:


