import { li } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'

function userService() {
  const userFactory = ( name, age, profession ) => ({ name, age, profession });

  return {
    getAll: () => [
      userFactory( 'Zdzisław Ącki', 48, 'plumber' ),
      userFactory( 'Kasia Kowalska', 28, 'actress' ),
      userFactory( 'Michał Legacy', 58, 'programmer' ),
      userFactory( 'Roman Nowak', 68, 'politician' ),
      userFactory( 'Anna Nowak', 25, 'economist' ),
      userFactory( 'Zdzisław Nowak', 44, 'banker' ),
      userFactory( 'Roman Zbych', 35, 'economist' ),
      userFactory( 'Janina Bosko', 35, 'programmer' ),
    ]
  }
}

/**
  #Task:
    1. Download the list of users from the site and show it on the DOM
    2. Implement user filtering using 'inputFilter'
    3. 'keyup' event with assumption that data from the website is coming from the server...,
        that is not exactly the "most efficient" solution - propose other one.

  #Goal:
  Showing new operators and learning how to use them;
  Remember about the possibility of checking operator behavior on: http://rxmarbles.com/
*/

  // Helper DOM wrappers:
  const makeLi = (user) => li(`${user.name} (${user.age}) - ${user.profession}`);

  // Helper selectors:
  const userList = $('ul#userList')
  const inputFilter = $('input[name="filter"]')

  // Your solution:



