
/**
   #Task:
   Check the data. Correct the functions so that they are PURE

   #Goal:
   Pure functions principles, on examples of functions that are IMPURE.
 */

  // Examples of IMPURE functions:

  // #1 (same) INPUT / (different) OUTPUT
  function randomNickname(name = '') {
    return `${name}_${Math.random() * 1000 | 0}`;
  }
  
  randomNickname('Mike') //?
  
  function generateNickname(name = '', suffix = '') {
    return `${name}_${suffix}`;
  }
  
  generateNickname('Mike', '😎') //?
  // Reason:
  // same input data always produce different output

  // #2 INPUT mutation
  function extendLawyerSkill(lawyer = {}) {
    lawyer.adaptEnvironmentRate = '60%';
    return lawyer;
  }
  
  const mikeLawyer = {
      name: 'Michal'
  }
  
  extendLawyerSkill(mikeLawyer);
  
  console.log(mikeLawyer)
  
  
  const monikaLawyer = {
    name: 'Monika '
  }
  function pureExtendLawyerSkill(lawyer = {}) {
    // return {...lawyer};
    // return Object.assign({}, lawyer, {adaptEnvironmentRate: '60%'});
    return {
        ...lawyer,
        adaptEnvironmentRate: '60%'
    };
  }
  
  const newLawyer = pureExtendLawyerSkill(monikaLawyer) //?
  
  console.log(monikaLawyer)
  // Reason:
  // Input data are mutated, their state changes

  
  
  // #3 External dependency
  function getTodoTitles(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then( res => res.json())
      .then( todos => {
        const titles = todos.map(t => t.title);
        callback(titles);
      });
  }
  
  function makeTodoTitles(totos){
     return totos.map(t => t.title);
  }
  
  // Reason:
  // The result of callback operation depends on what server provides

