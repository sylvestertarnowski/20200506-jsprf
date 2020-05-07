/**
 *
 * 1. Get the report and show it on the console.
 *    Be aware and meet the requirements below.
 *
 *
 */

function reporter(firstReportCallback, secondReportCallback) {
	const report = '100 people on-line';
	const report2 = 'My second report';
	/*
	* You cannot use "return" inside this function;
	* */
	
	firstReportCallback && firstReportCallback(report, report2)
	
	secondReportCallback && secondReportCallback(report2)
	
}

// How to get report without using "return"
// Write it out on the console below:

reporter(console.log)

// #2nd task:
// How to get second report afterwards?
reporter(null, console.log)
