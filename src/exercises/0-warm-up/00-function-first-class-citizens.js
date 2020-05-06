// Reminder: What environment are we dealing with
const myHelloWorldJob = function() {
	console.log('Hello World');
}

function executor(jobFunction) {

	setTimeout(() => {
		jobFunction()
	}, 2000)
}

// See how we can run the executor

// #1
executor(myHelloWorldJob);

// #2
executor(() => {
	console.log('Goodbye World !')
})


