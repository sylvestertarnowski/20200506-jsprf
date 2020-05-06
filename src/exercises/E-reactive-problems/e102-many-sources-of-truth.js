import { BehaviorSubject } from 'rxjs'

class SimpleService {

  constructor () {
    this.number$ = new BehaviorSubject(1);
    setTimeout(() => {
      this.number$.next(1000);
    }, 2000);
  }

  getNumbers() {
    return this.number$;
  }
}

/**
    #Task:
    1. Uncomment the lines and check the operation in the console.
     Why is this happening? Is this good practice or something to change?

    2. Replace the ugly setTimeout in SimpleService with observable and compose with BehaviourSubject.

    #Goal:
    Description of the typical "not a single source of truth" problem
    Subjects must be private!
    We must be sure who emits the data and where. It is best to encapsulate it for one class / module.
*/

const serviceInstance = new SimpleService();

// #1 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no) => console.log('#sub1', no));

// #2 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no) => console.log('#sub2', no));

// #3 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no) => console.log('#sub3', no));

(function deepDownInTheOceanOfModules(){

  // what happens if we uncomment the line below
  // timer(4000).pipe(mapTo('TROLL')).subscribe(serviceInstance.getNumbers())
}());
