
/**
 #Task:
 First: Guess, what will be shown by line with: "console.log(car)".
 Then, check it out (uncomment)

 #Goal:
 Illustrate problems with var. You can't feel comfort with vanilla JavaScript,
 because there are no lexical scope for defining variables that way.
*/

var car = 'Audi A8';

(function () {

  console.log(car);

  (function myOtherCar () {
    // #! Try to guess what value will be shown by "log" below:
    // console.log(car);

    var car = 'My Band new Car';
    // .....
  })()
}());
