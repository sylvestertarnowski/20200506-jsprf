import { Observable } from 'rxjs';

/**
    #Task:
    Suggest proper handling of subscription, error and completion of conversation with a lawyer

    #Goal:
    Showing API for rxjs - Observable.
    Note that Observables are lazy

    #Compare (Promise construction):
    ../C-asynchronous-concepts/c202-promise-refresher.js
*/

const mySuperLawyer = new Observable((observer) => {
  const goldenAnswersToYourClient = [
    'What would Harvey do?',
    'Please, hang on',
    'I will call you later...',
    "I'm Donna, I know everything",
    'The subscriber is currently unavailable',
  ];

  let n = 0;
  const interval = setInterval(() => {
    const quote = goldenAnswersToYourClient[n++];
    if (quote) {
      observer.next(quote);
      n === 3 && observer.error(new Error(quote));
    } else {
      observer.complete();
      clearInterval(interval);
    }
  }, 500);
});

mySuperLawyer.subscribe(
  (val) => console.log('Lawyer: ', val),
  (err) => console.log('Error: ', err),
  () => console.log('Conversation complete!')
);
