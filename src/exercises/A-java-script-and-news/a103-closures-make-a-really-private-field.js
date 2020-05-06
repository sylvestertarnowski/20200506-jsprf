
/**
  #Task:
  Confirm that the amount of earnings can be changed only inside the object
  and only by making a new method. This cannot be done immediately by the salary argument;

  #Goal:
  The classic usage and beauty of JavaScript.
  Demonstration of closures in practice (achieving privacy in object)
  Showing ES-NEXT elements in practice.
*/

// Default values ​​for function arguments
// http://es6-features.org/#DefaultParameterValues
function lawyerFactory(fullName = '', salary = 3000) {

  // Array destructuring
  // http://es6-features.org/#ArrayMatching
  // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
  const [firstName, lastName = ''] = fullName.split(' ');

  // shorten syntax for object fields
  // field name in the new object is the same as the variable name
  // PropertyShorthand http://es6-features.org/#PropertyShorthand
  return {
    firstName,
    lastName,
    // http://es6-features.org/#ExpressionBodies
    getSalary: () => `${firstName} earns $${salary}`
  }
}

const lawyerHarvey = lawyerFactory('Harvey Specter', 6000);
const lawyerMike = lawyerFactory('Michael Ross');
const lawyerRachel = lawyerFactory('Rachel Zane', 5000);
const lawyerDonna = lawyerFactory('Donna');

console.log(lawyerRachel.getSalary());
console.log(lawyerMike.getSalary());
console.log(lawyerHarvey.getSalary());
console.log(lawyerDonna.getSalary());

console.log('Value when no lastName:', lawyerDonna.lastName, '|');
