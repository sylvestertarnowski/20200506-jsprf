// Reminder: What environment are we dealing with
// ctrl + `

// console.log(2 + 20);
// let x = 10 + 100;
// x; //?

const myHelloWorldJob = function() {
	console.log('Hello World');
}

function executor(jobFunction) {

    jobFunction()
    jobFunction()
    
	// setTimeout(() => {
	// 	jobFunction()
		
	// }, 2000)
}

// See how we can run the executor

// #1
executor(myHelloWorldJob);

// #2
executor(() => {
	console.log('Goodbye World !')
})
















