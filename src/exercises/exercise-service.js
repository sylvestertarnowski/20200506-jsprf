
const exercisesList = [
  {title: '[lv.0 - A] ES Syntax - remind and extend', run: () => {}, disabled: true, value: '-'},
  {value: 'a101', run: import('./A-java-script-and-news/a101-es6-news'), title: 'A1.1 - ES6, news in JavaScript after 2015\'' },
  {value: 'a102', run: import('./A-java-script-and-news/a102-es7-es8-es-next'), title: 'A1.2 - ES(7,8) ES-next, mor news.... in years 2016+' },
  {value: 'a103', run: import('./A-java-script-and-news/a103-closures-make-a-really-private-field'), title: 'A1.3 - Practical use of closures for making a private data' },

  {title: '[lv.1 - B] Intro - functional programming', run: () => {}, disabled: true, value: '-'},
  {value: 'b101', run: import('./B-functional-programming/b101-functional-thinking'), title: '#B1.1 - Functional thinking - and you? how would you do it...' },
  {value: 'b102', run: import('./B-functional-programming/b102-higher-order-functions'), title: '#B1.2 - Rules in functional programming and Higher Order Functions' },
  {value: 'b103', run: import('./B-functional-programming/b103-list-of-user-favourite-books'), title: '#B1.3 - List of quotes from books - functional programming in practice' },
  {value: 'b104', run: import('./B-functional-programming/b104-advanced-functional-concept-example'), title: '#B1.4 - Advanced concepts of functional programming based on: "Curry" example' },
  {value: 'b201', run: import('./B-functional-programming/b201-flatten-list-for-santa'), title: '#B2.1 - Help Santa calculate the budget needed for the gifts' },
  {value: 'b202', run: import('./B-functional-programming/b202-flatten-list-for-santa-ramda'), title: '#B2.2 - Learn Ramda - solving Santa\'s problem again' },
  {value: 'b203', path: 'exercises/B-functional-programming/dom/b203-functional-in-dom.html', title: '#B2.3 - Functional programming in practice: use the DOM' },

  {title: '[lv.2 - C] Ways to deal with asynchronous code', run: () => {}, disabled: true, value: '-'},
  {value: 'c101', run: import('./C-asynchronous-concepts/c101-async-using-callbacks'), title: '#C1.1 - Using Callbacks' },
  {value: 'c201', run: import('./C-asynchronous-concepts/c201-async-using-promises'), title: '#C2.1 - Using Promises' },
  {value: 'c202', run: import('./C-asynchronous-concepts/c202-promise-refresher'), title: '#C2.2 - Remind yourself the Promise concept and use it bravery!' },
  {value: 'c203', run: import('./C-asynchronous-concepts/c203-promise-legacy-api-trick'), title: '#C2.3 - Legacy API with callback - what to do, how to live?' },
  {value: 'c204', run: import('./C-asynchronous-concepts/c204-write-promise-in-sync-style'), title: '#C2.4 - How to use new syntactic sugar in practice?' },
  {value: 'c205', run: import('./C-asynchronous-concepts/c205-promise-wait-for-all'), title: '#C2.5 - Calculate the weather for a kite by obtaining async data from several sources' },
  {value: 'c206', run: import('./C-asynchronous-concepts/c206-promise-from-anything'), title: '#C2.6 - Let\'s set something up, Promise can be made from anything!' },
  {value: 'c301', run: import('./C-asynchronous-concepts/c301-modern-ajax-requests'), title: '#C3.1 - How to collect the AJAX data nowadays?' },

  {title: '[lv.3 - D] Reactive programming', run: () => {}, disabled: true, value: '-'},
  {value: 'd101', run: import('./D-reactive-programming/d101-observable-from-anything'), title: '#D1.1 - What are data streams and how to make your own from ... anything?' },
  {value: 'd102', run: import('./D-reactive-programming/d102-observable-api'), title: '#D1.2 - What does the subscription API looks like?' },
  {value: 'd103', run: import('./D-reactive-programming/d103-observable-from-anything-with-helpers'), title: '#D1.3 - If you want a data stream from "anything" - use helper functions' },
  {value: 'd104', run: import('./D-reactive-programming/d104-subscription-control'), title: '#D1.4 - Control your subscriptions' },
  {value: 'd201', run: import('./D-reactive-programming/d201-introduction-to-operators'), title: '#D2.1 - Using operators - we\'re getting started!' },
  {value: 'd202', run: import('./D-reactive-programming/d202-understand-stream-of-values'), title: '#D2.2 - Use familiar functionalities: Conversion into data streams' },
  {value: 'd203', run: import('./D-reactive-programming/d203-setup-behavior-for-each-subscription'), title: '#D2.3 - Each subscription has its own unique behavior - understand the concept of subscribing' },
  {value: 'd204', path: 'exercises/D-reactive-programming/dom/d204-simple-dom-integration.html', title: '#D2.4 - What does simple integration with Events in the DOM look like?' },
  {value: 'd205', path: 'exercises/D-reactive-programming/dom/d205-more-advanced-dom-integration.html', title: '#D2.5 - More advanced DOM usage - using previously learned properties of streams, subscriptions, and operators' },
  {value: 'd206', path: 'exercises/D-reactive-programming/dom/d206-filter-users-with-better-performance.html', title: '#D2.6 - User filtering' },
  {value: 'd207', path: 'exercises/D-reactive-programming/dom/d207-what-is-a-subscriber.html', title: '#D2.7 - Who exactly is a subscriber?' },
  {value: 'd208', path: 'exercises/D-reactive-programming/dom/d208-cold-and-hot-observable.html', title: '#D2.8 - Cold and Hot Observables | what does it mean?' },
  {value: 'd209', run: import('./D-reactive-programming/d209-what-is-a-subject'), title: '#D2.9 - What is the Subject?' },
  {value: 'd210', path: 'exercises/D-reactive-programming/dom/d210-to-be-like-promise-all.html', title: '#D2.10 - To be a\'like Promise.all in Observables' },
  {value: 'd211', path: 'exercises/D-reactive-programming/dom/d211-where-is-my-promise-then.html', title: '#D2.11 - Okay, but where is my beautiful "promise.then(x).then(y)"' },
  {value: 'd212', path: 'exercises/D-reactive-programming/dom/d212-error-handling-operators.html', title: '#D2.12 - Operators helpful in catching errors' },
  {value: 'd213', path: 'exercises/D-reactive-programming/dom/d213-observable-of-observables.html', title: '#D2.13 - How to deal with a stream that emits streams...?!' },

  {title: '[lv.4 - E] Common pitfalls / error in code when using streams', run: () => {}, disabled: true, value: '-'},
  {value: 'e101', run: import('./E-reactive-problems/e101-stream-data-mutation'), title: '#E1.1 - Mutate data inside the stream' },
  {value: 'e102', run: import('./E-reactive-problems/e102-many-sources-of-truth'), title: '#E1.2 - Many sources of truth?!' },
  {value: 'e103', run: import('./E-reactive-problems/e103-subject-overuse'), title: '#E1.3 - Subject overuse' },
  {value: 'e104', path: 'exercises/E-reactive-problems/dom/e104-nesting-subscription.html', title: '#E1.4 - Nesting subscriptions, hmmm it looks familiar....' },
];

export const exerciseService = {

  getAll() {
     return exercisesList;
  },
  getOne(value) {
    const idx = exercisesList.findIndex((ex)=> ex.value === value);
    return exercisesList[idx];
  }
};
