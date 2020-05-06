/**
  New syntactic sugar and API extensions for JavaScript

  #Goal:
  Both functional and reactive programming, now use many simplifications,
  enhancements and new functionalities of JavaScript
  - it is good to take a look and get familiar with them.

  v.2.0
*/

// Sample #1 | Modularity in JavaScript (in the old times)
(function oldFashionModularity(){
  console.log('#1  ---- oldFashionModularity() :');

  var outerScope = 'Hello';

  (function immediatelyInvokedFunctionExpression() {

    var innerScope = ' World?';
    console.log('Access to outer module.', outerScope + innerScope);
  }());

  // #! Remove comment below:
  // console.log(innerScope);

  // Do you know / remember jQuery?
  const fakeJQuery = { fn: {} };
  (function ( $ ) {

    $.fn.whoIsYourCreator = function() {
       const author = {
         name: 'John Resig',
         birth: 'May 8, 1984',
         tweet: '@jeresig'
       };
       return author.name;
    };
  }( fakeJQuery ));
  console.log('my fake jQuery', fakeJQuery);

  // Now - the same effect (Modularization) can be achieved via separate .js files
  /* example:
    <script type="module">
        import './a102-es7-es8-es-next.js';
    </script>
  */
}());

// Sample #2 | New way of variable declarations, use: let, const - keywords
(function lexicalLetAndConst(){
  console.log('#2 ---- lexicalLetAndConst() :');
    // #! compare with example: a1-samples/var-problem.standalone.js

    let x = 1;
    x++;
    console.log('My ex is:', x);

    const y = 100;
    console.log('Hello I\'m', y, 'I cannot be reassigned');
}());

// Sample #3 | Arrow functions
(function arrowFunctions(){
  console.log('#3 ---- arrowFunctions() :');
    // Short form:
    const myFunc = (x) => {
      console.log(x);
    };

    // Even shorter form:
    const myFunc2 = (x) => console.log(x);

    // You can write it like that for single parameter:
    const oneArgFunc = name => `hello ${name}`;
    console.log(oneArgFunc('Helena'));

    // Array function do not change context:
    // #! compare with example: a1-samples/context-problem.standalone.js

}());

// Sample #4 | Default values for function parameters
(function defaultValues(){
  console.log('#4 ---- defaultValues() :');

  function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
     console.log('Grab', device, 'dial', phoneNo, 'call', name)
  }

  callMyGrandpa('Józef');
  callMyGrandpa('Staszek', '0000-1202917');
  callMyGrandpa('Zbyszek', '+48 601-284-212', 'Xiaomi');

}());

// Sample #5 | Properties and methods - shortened forms
(function objectPropertyShorthandAndMethodProperties() {
    console.log('#5 ---- objectPropertyShorthandAndMethodProperties() :');
    // Object Property Shorthand:
    const name = 'John';
    const user = {
        name
    }
    console.log(user);
    // Method Properties:
    const welcomer = {
        greetings() {
            console.log('Welcomer says: Hello !');
        }
    }
    welcomer.greetings()
}());

// Sample #6 | Syntactic sugar for class
(function classes(){
  console.log('#6 ---- classes() :');

  class Grandma {
    constructor ( name ) {
      this.name = name;
      this.type = 'Grandma';
    }

    hello() {
      console.log(this.type, this.name, 'says Hello!');
    }
  }

  const myGrandma = new Grandma('Ursula');
  myGrandma.hello();

  console.log(typeof myGrandma);
  // #! Guess what will be shown in console below, then remove comment and check:
  // console.log(typeof Grandma);
}());

// Sample #7 | Destructure objects and tables
(function destructuring(){
  console.log('#7 ---- destructuring() :');

  const inDoorAPI = {
    fridge: {
      manufacturer: 'Samsung',
      model: 'Cooler 291263',
      doors: 3,
      deFrost: true,
      content: ['eggs', 'ham', 'cheese', 'orange juice']
    }
  };

  //
  //
  //
  // over a dozen lines of code below (or just assuming that inDoorAPI is from other module)
  // .....

  // show me the fridge manufacturer:
  const { manufacturer } = inDoorAPI.fridge;
  console.log('manufacturer:', manufacturer);

  // show me number of doors in the fridge:
  const { fridge: {doors} } = inDoorAPI;
  console.log('doors:',doors);

  // take cheese out of the fridge:
  const { content } = inDoorAPI.fridge;
  const [,,yourCheese] = content;
  console.log('Here you are, it is your:', yourCheese);
}());

// Sample #8 | throw in and pull out helpers for function arguments nad array manipulation
(function spreadAndRestOperators(){
  console.log('#8 ---- spreadAndRestOperators() :');

  const fruits = ['apple', 'banana', 'pear'];
  const vegetables = ['carrot', 'onion'];

  // combine fruits and vegetables:
  const combineWithSpread = [...fruits, ...vegetables];
  console.log(combineWithSpread);

  let no = 1;
  function consoleCounter(msg, ...rest) {
    // first "rest" then "spread":
    console.log(`no.${no++}`, msg, ...rest);
  }

  consoleCounter('First message', 'Hello World');
  consoleCounter('Second message');
  consoleCounter('Third message', 'Greetings !');
}());

// Sample #9 | Text interpolation and multiline string value
(function templateString(){
  console.log('#9 ---- templateString() :');

  const interpolate = 'official suit';
  console.log(`
  
  My
  multi-lined console.log is wearing an ${interpolate} !
  
  `)
}());

// Sample #10 | Generators
(function generators(){
  console.log('#10 ---- generators() :');

  function* giveMeNumber() {
    for(let x = 0; x <= 10; x++) {
      yield x;
    }
  }

  const iterator = giveMeNumber();
  console.log('Generate...', iterator.next().value);
  console.log('Generate...', iterator.next().value);
  console.log('Generate...', iterator.next().value);

}());

// Sample #11 | a ES7 i ES8 ?
((gimme = 'More !') => {
  // Continued in another file....
})();
