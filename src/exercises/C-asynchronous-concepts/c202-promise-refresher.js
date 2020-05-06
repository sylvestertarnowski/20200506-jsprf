
/**
  #Task:
  1. Replace callback with promise.
  2. Note how callback-api handle the errors, suggest promise error handling as well

  #Goal:
  Recalling the promise structure for the task
 */

function incomingCallFromYourLawyer( answerTheCall) {

  const IDLE_CONNECTION = 2000; // 2 seconds for connection
  const lawyerMessage = `Hello Client, 
  that's unfortunate, but I can not help you. 
  
  That advice will cost you - $100 
  `;

  // Callback:
  setTimeout(() => answerTheCall(null, lawyerMessage), IDLE_CONNECTION)
}

// Your solution::
incomingCallFromYourLawyer((error, lawyerAnswer) => {
    if(error) {
        console.log('Your phone call failed:');
        console.error(error);
    } else {
        console.log('Your lawyer said:');
        console.log(lawyerAnswer);
    }
});

