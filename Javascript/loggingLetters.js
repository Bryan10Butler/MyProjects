//Logging Letters Code Practice 
//The length string is used to return the number of characters in a string
//Here we are comparing the value of "i" to the number of characters in our sentence "I love..."
//This assures that the loop will only execute as many times as there are characters in our sentence string
//Variable "i" can be declared inside or outside the for loop, but must be given a value inside the for loop
var sentence = "I love learning software development";
for (var i = 0; i < sentence.length; i++) {
     if(sentence[i] !== " "){
      console.log(sentence[i]);
     }
}

//If Statements Code Practice
var n = 10;
var result = 0;
//evaluate the condition and return if true. If false, evaluate next condition.
if (n % 2 == 0) {
	console.log(n + " is an even number");
}
//evaluate the condition and return if true. If false, default to else below.
else if (n % 2 != 0) {
	console.log(n + " is an odd number");
}

//More If Statement Practice
var car = "Buick";
//evaluate the condition and return if true. If false, default to else if below.
if (car == "Jeep") {
	console.log("Your favorite car is a " + car);
}
//evaluate the condition and return if true. If false, default to else below.
else if (car == "Ford") {
	console.log("Your favorite care is a " + car);
}
//default to else if both conditions above are false
else {
	console.log("This is not a car I recognize");
}

//Switch Statement Practice
var color = "pink";
//Specify your variable - If car is equal to - Ex. Blue, do the following
switch (color) {
	//specify condition - Ex. In case the color is blue, do the following
	case "Blue": 
		console.log("This color is " + color);
		//Specify break to break out of the statement if match is found
		break;
	case "Red":
		console.log("This color is " + color);
		break;
	default: 
		console.log("I do not like the color you picked");
}

//While Loop Practice
var counter = 1;
//specify condition within while loop - Ex. While one is less than or equal to 1 continue to execute
while (counter <= 10) {
	console.log("This is paragraph " + counter);
	counter++;
}

//For Loop Practice
//For Loop includes a built in counter whereas a while loop does not
//Always specify three separate statements within for loop
//(start;condition;increment)
//Start count at 1 with variable i
//Increase as long as i is less than 10
for (var i = 0; i < 10; i++) {
	//Statement (give our loop something to do)
	console.log("This loop ran " + i);
}

//Do While Loop Practice
//Regardless of condition, statement will run at least once
//Set variable and counter to start at 1
var counter = 1;
//Specify what we want out loop to do
do{
	console.log("This is iteration " + counter);
	counter ++;
//Specify our condition - In this case, count until less than or equal to 10
}while (counter <= 10);

//Code Practice: For Loops
var n = 25;
var sum = 0;

for (sum = 0; sum <= n; sum++) {
	console.log(sum);
}

//Pop-Up Training
// Check to see if the user likes cake
var likesCake = confirm("Do you like cake?");
// If the user likes cake, find out what their favorite cake is
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is whatever they inputted 
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}

//Function Practice
//Create a function 
//all statements go in {} - What you want your function to do
function sayHello() {
	alert("hi");
	//There will be no output as sayHello() is not being called yet
}

//Additional function practice
//all statements go in {} - What you want your function to do
//A parameter is a variable we place inside () and we can use this variable inside our function
//A parameter variable is essentially creating a new variable (myName) without saying "var"
function sayHello(myName) {
	alert("Hello, my name is" + myName);
	//There will be no output as sayHello() is not being called yet 
	//When we do call sayHello(), we would pass myName in as an argument
}

//all statements go in {} - What you want your function to do
function sayHello(myName) {
	alert("Hello, my name is" + myName);
}
//we now call sayHello and initialize our myName variable
sayHello(" Mr. Grinch");

var n = 25;
var sum = 0;

for (sum = 0; sum < 25; sum ++) {
	//+= assignment operator stores the new output in a variable and uses that new variable in the next iteration - Ex. n = n + sum 
	console.log(n += sum);
}






	
	




