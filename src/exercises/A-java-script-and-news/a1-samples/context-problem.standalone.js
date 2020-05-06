
/**
 #Task - in comments, below.

 #Goal:
 Point out the problem of execution context in JavaScript.
 Get familiar with additional "superpower" of arrow (=>) function
*/

function Lawyer ( name ) {
  this.name = name;
  this.introduce = function () {
    console.log('Hello I\'m your lawyer, my name is', this.name)
  };
  this.introduceAfter = function (seconds) {
    setTimeout(function () {
      this.introduce();
    }, seconds * 1000);
  };
}

const harvey = new Lawyer('Harvey Specter');
const louis = new Lawyer('Louis Litt');

// Your lawyer shows himself in interrogation room immediately
harvey.introduce();

// If you have to wait for your lawyer:
// #! What will happen if we uncomment line below?
// louis.introduceAfter(1);
