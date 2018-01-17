/*
//Counting Characters 1
function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}
//we could create a var cake = "cake";
//Then call countingCharacters(cake); which initializes variable stringToCount 


//Counting Characters 2
// Let's count the number of times a character appears in a string
// We will look at each character one-by-one with the help of a for loop
//We see two variables within the parenthesis 
xxaxxbxx 8 characters
function countingCharacters2(stringToCount, characterToFind) {
	var characterCount = 0;
	var characterPosition = 0;
	for (characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
		//character position is giving you a number. That number determines what position you are within your sentence. 
		if (stringToCount[characterPosition] == characterToFind){
			characterCount++;
		}
	}
	console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}
//we will not call countingCharacters2("xxaxxbxx", "x"); in the console
//we could call below and run in console as well

function countingCharacters3(str, search) {
	var count = 0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	
	for (var index = 0; index <= lastIndex; index++) {
			var current = str.substring(index, index + numChars);
			if (current == search){
				count ++
			}
	}
	console.log("String to search in: " + str);
    console.log("Character to find: " + search);
    console.log("Number of times the character appears: " + count);
	//return count is another option if we just want the count returned
}

//Code Along Roll Dice
for (var i = 0; i < 100; i++) {
	console.log(Math.random() * (1 + 6 - 1));
}

//Roll Dice for Lucky Sevens
function rollDice(minimum, maximum) {
	return Math.ceil(Math.random() * (1 + maximum - minimum));
}
for (var i = 0; i < 100; i++) {
	//need to call function depending on dice range
    console.log(rollDice(1,4));
}

function addTwoNumbers(firstNumber, secondNumber) {
	
	console.log(firstNumber + secondNumber);
}
addTwoNumbers(5,5);

//Array practice
//Declare a new Array - Always specify "new"
//Each car in the Array is an element 
var cars = new Array("Ferrari", "Porsche", "Jag", "Lambo", "Dodge");
console.log(cars[0]);	

//More Array Practice
//Declare Array with certain number of spaces available
//We could leave new Array blank so we could increase the number of elements
var cars = new Array();
cars[0] = "Ferrari";
cars[1] = "Porsche";
cars[2] = "Jag";	
cars[3] = "Lambo";	
cars[4] = "Dodge";	
//prints out Ferarri
console.log(cars[0]);
//prints out how many elements we have
console.log(cars.length);


var Bryan = new Array ("Aileen", "Parin", "Dan", "John");

for (var i = 0; i < Bryan.length; i++) {
	console.log("These are my friends " + Bryan);
}

var Bryan = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];
var team1 = new Array();
var team2 = new Array();

for (var i = 0; i < Bryan.length; i++) {
	if (i % 2 == 0) {
		//push Bryan's array to team 1
		team1.push(Bryan[i]);
		//console.log below shows the steps the array took to get to end result
		//console.log(team1);
	}
}
		//console.log here shows end result
		console.log(team1);
*/

//push pushes a new value to end of array
//pop removes a value from the end of an array
//removes removes the first value of the array
//unshift add a value to the front of an array
//fruits.slice(0, 2);
//The slice(0,2) returns 2 elements, starting from position 0:
//fruits.slice(0,2);
//However, if we use splice(), then fruits will change as splice removes in addition to printing
//.length can be used to add to the end of an array
//fruits[fruits.length] = "blueberry"; //mango, gooseberry, blueberry
//specifying a specific index can add to an array as well
//fruits[2] = "pineapple"; // mango, gooseberry, pineapple






var names = ['Bryan', 'Alex', 'Aileen', 'Dan'];

names.unshift('John');

console.log(names);




	
	
	
	
	
	
	