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
