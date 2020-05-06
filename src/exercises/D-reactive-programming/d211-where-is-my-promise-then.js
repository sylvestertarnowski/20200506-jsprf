import { button, li, ul } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'
import { ajax } from 'rxjs/ajax'

  /**
   #Task:
   After clicking the button, load the list of users from the on-line source.
   Then wait one second to show the DOM result later.
   The whole action has 3 steps (click - ajax - render after 1 sec)

   API link with a list of users: https://jsonplaceholder.typicode.com/users

   #Goal:
   Sometimes we need Observable to have similar functionality to Promises.
   "Come with the result and perform another asynchronous operation" - how do you achieve it in practice?
   In promise mechanism - we have .then() and another Promise, how to achieve similar in Observable?

   Knowing ajax calls with observables, avoiding subscription nesting.
   Operators: switchMap, map, from
   */

  // Helper DOM wrappers:
  const loadUsersBtn = button('Load users', ['btn','btn-primary']);
  const myUlList = ul([ ], ['list-group', 'text-dark']);
  const mapUserToLi = (user) => li(`${user.name} (${user.email})`);


  // Your solution:


  // HTML Boilerplate:
  const buttonWrapperDOM = $('#buttonWrapper');
  const usersWrapperDOM = $('#usersWrapper');

  buttonWrapperDOM.appendChild(loadUsersBtn)
  usersWrapperDOM.appendChild(myUlList)
