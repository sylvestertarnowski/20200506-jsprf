import { $ } from '../../dom-api/selector'

  /**
    #Task:
    After each click on the "Add" and "Subtract" buttons, the result in the "Counter" should change.
    For example: if I click 4x add + 1x subtract, then - "3" will appear in resultDiv
    You MUST use the object: subscriber.

    #2:
    How to add additional functionalities to the subscriber?

    #Goal:
    Another way of obtaining values from 2 streams (merging).
    Show that the subscription does not have to be made as a callback function. You can pass the subscriber object to it
  */

  // Helper DOM selectors:
  const addBtn = $('#btnPlus');
  const minusBtn = $('#btnSubs');
  const resultDiv = $('#counter');

  // Our Subscriber
  const subscriber = {
    next(value) {
      resultDiv.innerText = value;
    }
  };
  // Your solution:

