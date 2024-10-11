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
let MyAge = 16; // Age of the person
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
/*
3. `else if` Statement: Checks multiple conditions sequentially.

Syntax:
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if both conditions are false
}
*/

// Example 1: Grading system based on score
let Myscore = 85; // Storing the score
if (score >= 90) {
    console.log("You got an A!"); // Prints if score is 90 or above
} else if (score >= 80) {
    console.log("You got a B!"); // Prints if score is between 80 and 89
} else if (score >= 70) {
    console.log("You got a C!"); // Prints if score is between 70 and 79
} else {
    console.log("You need to improve."); // Prints if score is below 70
}

// Example 2: Checking the weather
let weather = "sunny"; // Storing the current weather
if (weather === "sunny") {
    console.log("It's a beautiful day!"); // Prints if the weather is sunny
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!"); // Prints if the weather is rainy
} else {
    console.log("Enjoy your day!"); // Prints for any other weather condition
}

// Example 3: Determining the age group
let Myage = 10; // Storing the age
if (age < 13) {
    console.log("You are a child."); // Prints if the age is less than 13
} else if (age < 20) {
    console.log("You are a teenager."); // Prints if the age is between 13 and 19
} else {
    console.log("You are an adult."); // Prints if the age is 20 or above
}
/*
4. `switch` Statement: A way to handle multiple choices based on the value of a variable.

Syntax:
switch (expression) {
    case value1:
        // code to run if expression === value1
        break;
    case value2:
        // code to run if expression === value2
        break;
    default:
        // code to run if none of the cases match
}
*/

// Example 1: Evaluating a grade
let grade = "B"; // Storing a grade
switch (grade) {
    case "A":
        console.log("Excellent!"); // Prints if grade is A
        break;
    case "B":
        console.log("Well done!"); // Prints if grade is B
        break;
    case "C":
        console.log("Good job!"); // Prints if grade is C
        break;
    default:
        console.log("Keep trying!"); // Prints if none of the cases match
}

// Example 2: Checking the day of the week
let day = 3; // Storing a number for the day of the week
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Prints if day is 3
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day!"); // Prints if none of the cases match
}

// Example 3: Evaluating the type of pet
let pet = "dog"; // Storing the type of pet
switch (pet) {
    case "cat":
        console.log("You have a cat!"); // Prints if pet is a cat
        break;
    case "dog":
        console.log("You have a dog!"); // Prints if pet is a dog
        break;
    case "fish":
        console.log("You have a fish!"); // Prints if pet is a fish
        break;
    default:
        console.log("Unknown pet!"); // Prints if none of the cases match
}
