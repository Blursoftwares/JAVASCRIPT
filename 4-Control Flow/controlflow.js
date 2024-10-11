/*
Control Flow: Making Decisions in Code

1. `if` Statement: Executes code if a certain condition is true.

Syntax:
if (condition) {
    // code to run if the condition is true
}
*/

// Example 1: Checking if a number is positive
let number = 5; // Storing the number 5
if (number > 0) {
    console.log("The number is positive."); // Prints this if the condition is true
}

// Example 2: Checking if a user is an adult
let age = 20; // Age of the user
if (age >= 18) {
    console.log("You are an adult."); // Prints this if age is 18 or older
}

// Example 3: Checking if a string includes a certain word
let message = "Hello, world!"; // Storing a message
if (message.includes("world")) {
    console.log("The message contains 'world'."); // Prints if the word is found in the string
}
/*
2. `else` Statement: Executes code if the `if` condition is false.

Syntax:
if (condition) {
    // code to run if the condition is true
} else {
    // code to run if the condition is false
}
*/

// Example 1: Checking if a person can legally drive
let age = 16; // Age of the person
if (age >= 18) {
    console.log("You can drive."); // Prints if the person is 18 or older
} else {
    console.log("You are too young to drive."); // Prints if the person is younger than 18
}

// Example 2: Checking if a temperature is freezing or not
let temperature = -5; // Storing a temperature value
if (temperature <= 0) {
    console.log("It's freezing!"); // Prints if the temperature is 0 or below
} else {
    console.log("It's above freezing."); // Prints if the temperature is above 0
}

// Example 3: Evaluating if a student passed or failed
let score = 65; // Storing the score of the student
if (score >= 50) {
    console.log("You passed!"); // Prints if the score is 50 or above
} else {
    console.log("You failed. Try again!"); // Prints if the score is below 50
}
