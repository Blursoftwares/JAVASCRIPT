/*Operators
1. Arithmetic Operators
Arithmetic operators perform basic math operations, like addition, subtraction, multiplication, and division.

Addition (+): Adds two numbers.
Subtraction (-): Subtracts one number from another.
Multiplication (*): Multiplies two numbers.
Division (/): Divides one number by another.
Modulus (%): Finds the remainder when one number is divided by another.
*/

let sum = 5 + 3;         // Adds 5 and 3
let difference = 10 - 4; // Subtracts 4 from 10
let product = 4 * 2;     // Multiplies 4 by 2
let quotient = 20 / 5;   // Divides 20 by 5
let remainder = 10 % 3;  // Remainder of 10 divided by 3

console.log(sum);        // Prints 8
console.log(difference); // Prints 6
console.log(product);    // Prints 8
console.log(quotient);   // Prints 4
console.log(remainder);  // Prints 1
/*
2. Comparison Operators
Comparison operators compare two values and return a boolean (true or false).

Equal to (==): Checks if two values are equal (without checking type).
Strict equal to (===): Checks if two values are equal and of the same type.
Not equal (!=): Checks if two values are not equal.
Strict not equal (!==): Checks if two values are not equal or not of the same type.
Greater than (>): Checks if the left value is greater than the right.
Less than (<): Checks if the left value is less than the right.
Greater than or equal to (>=): Checks if the left value is greater than or equal to the right.
Less than or equal to (<=): Checks if the left value is less than or equal to the right.
*/

let x = 5;
let y = 10;

console.log(x == y);   // Prints false because 5 is not equal to 10
console.log(x === 5);  // Prints true because both value and type match
console.log(x != y);   // Prints true because 5 is not equal to 10
console.log(x > y);    // Prints false because 5 is not greater than 10
console.log(x <= 5);   // Prints true because 5 is equal to 5
/*
3. Logical Operators
Logical operators combine multiple conditions and return true or false based on the logic.

AND (&&): Returns true if both conditions are true.
OR (||): Returns true if at least one condition is true.
NOT (!): Reverses the boolean value (makes true become false, and vice versa).
*/
let isSunny = true;
let isWeekend = false;

console.log(isSunny && isWeekend);  // Prints false because both conditions are not true
console.log(isSunny || isWeekend);  // Prints true because at least one condition is true
console.log(!isSunny);              // Prints false because the original value of isSunny is true
/* 4. Assignment Operators
Assignment operators assign values to variables.

Assign (=): Assigns a value to a variable.
Add and assign (+=): Adds a value to a variable and reassigns the result.
Subtract and assign (-=): Subtracts a value from a variable and reassigns the result.
Multiply and assign (*=): Multiplies a variable by a value and reassigns the result.
Divide and assign (/=): Divides a variable by a value and reassigns the result.
*/

let a = 5;      // Assigns 5 to variable a
a += 3;         // Adds 3 to a (now a is 8)
a -= 2;         // Subtracts 2 from a (now a is 6)
a *= 4;         // Multiplies a by 4 (now a is 24)
a /= 2;         // Divides a by 2 (now a is 12)

console.log(a); // Prints 12

/*
5. Increment and Decrement Operators
These operators are used to increase or decrease the value of a variable by 1.


Increment (++): Increases the value by 1.
Decrement (--): Decreases the value by 1.
*/

let count = 10;

count++;  // Increments count by 1 (now count is 11)
count--;  // Decrements count by 1 (now count is back to 10)

console.log(count); // Prints 10

/*
6. Ternary Operator
The ternary operator is a shorthand for if statements. It takes three operands: a condition, a value if true, and a value if false.
Ternary Operator (? :): A quick way to make decisions based on a condition.
*/
let MyAge = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor.";

console.log(message);  // Prints "You are an adult."
