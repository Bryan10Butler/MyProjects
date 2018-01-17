/*
// In this exercise, we have an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
// Let's get a sum of these elements
var sum = 0;
// We'll use a for loop to calculate that sum
for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
    // We'll use the unary addition operator 
    // to add the current element's value to the rolling sum
    sum += testArray[arrayPosition];
}
console.log("The sum of " + testArray + " is: " + sum);
*/
var max = 0;
function myArray() {
	//arguments property allows you to evaluate what is in the function parameters 
	//Start at 0, increment until i exceeds arguments in count
	//.length gives you the length of the array which is 6
	//if we didn't have .length we can say i < 6
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
		max = arguments[i];
		}
	}
	console.log("The maximum number is " + max);
}
myArray(1,2,3,4,5,6);
		