
/**
  #Task:
  Replace callback design with promise without touching the old API!

  #Goal:
  Simple change of callback (error, data) in Promise using the utility function
*/

// You can't change "incomingCallFromYourLawyer" !!!
// Let's assume that it comes from a different API and you can't change it
function incomingCallFromYourLawyer( answerTheCall) {

    const IDLE_CONNECTION = 2000; // 2 seconds for connection
    const lawyerMessage = `Hello Client, 
    that's unfortunate, but I can not help you. 

    That advice will cost you - $100 
    `;

    // Callback:
    setTimeout(() => answerTheCall(null, lawyerMessage), IDLE_CONNECTION)
}

// Current solution:
  incomingCallFromYourLawyer((error, lawyerAnswer) => {
    if(error) {
      console.log('Your phone call failed:');
      console.error(error);
    } else {
      console.log('Your lawyer said:');
      console.log(lawyerAnswer);
    }
  });

// Your solution:
// We write only here!

// .....

