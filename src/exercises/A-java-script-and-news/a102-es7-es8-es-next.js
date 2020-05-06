// @ts-nocheck

/**
   Another slice of new JavaScript functionalities

   #Goal:
   Supplementing knowledge of ES6
   Note that in a moment there will be ES11 etc. because the language is developing from year to year.
 */
// ES7 --------------
// Sample #1 | exponential operator
(function exponentialOperator(){
  console.log('#1  ---- exponentialOperator() :');

  const two = 2;
  console.log(two ** 2); // 2 ^ 2
  console.log(two ** 4); // 2 ^ 4
}());

// Sample #2 | simplified checking if a given element exists in the array
(function arrayIncludes(){
  console.log('#2  ---- arrayIncludes() :');

  const lawyers = ['Louis', 'Rachel', 'Jessica', 'Michael', 'Harvey'];

  console.log('Dona is present?', lawyers.includes('Donna'));
  console.log('Jessica is present?', lawyers.includes('Jessica'));
  // And, yes - it is case-sensitive:
  console.log('JessiCa is present?', lawyers.includes('JessiCa'));
}());

// ES8 --------------
// Sample #3 | array of values ​​for a given object
(function objectValues(){
  console.log('#3  ---- objectValues() :');

  const barrel = {
    lid: 'plastic',
    body: 'wooden',
    content: 'pickles'
  };

  console.log('barrel values:', Object.values(barrel));
}());

// Sample #4 | fill a string value with a given character (up to given length)
(function padStartPadEnd(){
  console.log('#4  ---- padStartPadEnd() :');

  console.log('Today is: ', '9'.padStart(2, '0'));
  console.log('You got: ', '9,'.padEnd(5, '0'), '$');

  console.log('EnterNumber: ', '9'.padStart(5, '-'));
  console.log('EnterNumber: ', '91'.padStart(5, '-'));
  console.log('EnterNumber: ', '911'.padStart(5, '-'));
}());

// Sample #5 | async and await operators that let you write an asynchronous code in the same way as a synchronous one
(function asyncAwait(){
  console.log('#5  ---- asyncAwait() :');
  const fetchData = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(['hello', 'async'])
    }, 1000)
  });

  (() => {
    fetchData().then((arr) => console.log('#5  ---- then array:', arr))
  })();

  (async () => {
     // Any Promise can be handled by async/await
     const myArray = await fetchData();
     console.log('#5  ---- await array:', myArray)
  })();

}());

// ES9
// Sample #6 | promise finally
(function promiseFinally(){
  console.log('#6  ---- promiseFinally() :');
  const fetchData = (breakIt = false) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if(breakIt) {
        reject(new Error('breakIt flag is on!'))
      } else {
        resolve('Hello from promise')
      }
    }, 1000)
  });

  fetchData()
    .then((result) => console.log('#6  ---- result:', result))
    .finally(() => console.info('#6  ---- finally !'));

  fetchData(true)
    .then((result) => console.log('#6  ---- result 2:', result))
    .catch((err) => console.error('#6  ---- error 2:', err.message))
    .finally(() => console.info('#6  ---- finally 2 !'));

}());

// ES10
// Sample #7 | flattening multidimensional arrays
(function arrayFlat(){
  console.log('#7  ---- arrayFlat() :');

  const twoDimensionsArray = [[9], [10, 11], 12]

  console.log(twoDimensionsArray)
  console.log(twoDimensionsArray.flat())

}());

// Sample #8 | object assembly from the so-called entry: [ ['key', 'value'] ]
(function objectFromEntries(){
  console.log('#8  ---- objectFromEntries() :');

  const entries = [['first', 1], ['second', 2], ['third', 3]];
  const order = Object.fromEntries(entries)
  console.log(order)

  const mapEntries = new Map();
  mapEntries.set('name', 'John')
  mapEntries.set('occupation', 'IT Recruiter')

  console.log(Object.fromEntries(mapEntries));
}());

// ES11
// Sample #9 | dynamic imports
(function dynamicImports(){

    import('../exercise-service').then(module => {
        console.log('#9  ---- dynamicImports() :');
        console.log(module)
    })
}());

// Sample #10 | unified global object (regardless of whether web worker / browser / node)
(function globalThisObject(){
    console.log('#10  ---- globalThisObject() :')
    console.log(globalThis)
}());

// Sample #11 |
(function optionalChainingOperator(){
    console.log('#11  ---- optionalChainingOperator() :')
    const user = {};

    // This will cause us an error (these values ​​are not in the object)
    // console.log(user.address.street.building)

    // Therefore, instead of the old style:
    console.log(user && user.address && user.address.street && user.address.street.building)

    // We can use:
    console.log(user?.address?.street?.building)
}());

