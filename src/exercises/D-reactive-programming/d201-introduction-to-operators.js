import { interval } from 'rxjs'

/**
    #Task:
    We are only interested in the first 4 emissions from the stream of numbers.
    Then we want to terminate the subscription.
    Every time we want to have information in the form:
      "Hello world x" where "x" is the number emitted from our stream

    #Goal:
    Use of operators.
    As "helpers" in achieving a given behavior of our subscription
*/

const number$ = interval(800);

