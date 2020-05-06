import { $ } from '../../dom-api/selector'
import { li } from '../../dom-api/make-dom'

/**
    #Task:
    After clicking the button, load the task list from the on-line source.
    Find the todo titled "deleniti ea temporibus enim" (id: 56)
    Download the author's data using: https://jsonplaceholder.typicode.com/users/(:userId)

    link to API with todo tasks: https://jsonplaceholder.typicode.com/todos

    #Goal:
    Use of "switchMap".
    The task is similar to that of "promise - then".
    The temptation to solve the task by nesting the subscription threatens a result similar to "callback hell"
 */

  // Helper DOM selectors:
  const loadTodosBtn = $('button#loadTodo');
  const myToDoUl = $('ul#todoList');

  const mapTodoToLi = (todo) => li(`${todo.title}`);

  // Your solution:

