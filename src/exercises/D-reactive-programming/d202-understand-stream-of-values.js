
/**
  #Task:
  Convert to 3 data streams and subscribe, show results on the console

  #Goal:
  Consolidation and understanding that the concept of "Observables" refers to data streams.
  These streams can be created based on various data emitting objects.
*/

// Your solution:

  // #1 ----------
  document.addEventListener('click', (ev) => {
    console.log('Hello click !', ev);
  });

  // #2 ----------
  let no = 0;
  const inter = setInterval(() => {
    console.log(no++)
  }, 1000);

  setTimeout(() => {
    clearInterval(inter);
  }, 4000);

  // #3 ----------
  const observableWannabeArray = ['this', 'also', 'can', 'be', 'Observable'];

