# Loops in JavaScript

## Overview

In this module, we will be tackling one of the most core aspects of JavaScript programming called loops. This 

## Table of Contents

- [Introduction](#introduction)
- [Types of Loops](#types-of-loops)
  - [For Loop](#for-loop)
  - [While Loop](#while-loop)
  - [Do-While Loop](#do-while-loop)
- [Break and Continue Statements](#break-and-continue-statements)
- [Example Use Cases](#example-use-cases)
- [Best Practices](#best-practices)
- [Conclusion](#conclusion)
- [Resources](#resources)

## Introduction
Loops are a fundamental concept in programming that allows you to execute a block of code repeatedly for a specified number of times. In JavaScript, there are three main types of loops: `for`, `while`, and `do-while` loops.

## Types of Loops

### For Loop
A `for` loop is used to execute a block of code repeatedly for a specified number of times. It has three main components:
1. **Initialization**: This happens once, before the loop starts.
2. **Condition**: As long as this condition is `true`, the loop will continue.
3. **Increment/Decrement**: This happens after each iteration of the loop.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("This is iteration number " + i);
}
```

In the example above:
- `let i = 0` initializes the loop counter `i` to 0.
- `i < 5` checks if `i` is less than 5.
- `i++` increments `i` by 1 after each loop iteration.
- The `console.log()` function outputs the current iteration number.

### While Loop
A `while` loop repeats as long as a specified condition evaluates to `true`. It's typically used when the number of iterations is unknown.

```javascript
let i = 0;
while (i < 5) {
    console.log("While loop iteration: " + i);
    i++;
}
```

In this example:
- The `while` loop runs as long as `i < 5` is `true`.
- Each time the loop runs, `i` is incremented by 1.

### Do-While Loop
A `do-while` loop is similar to a `while` loop, except it guarantees that the code inside the loop runs at least once, regardless of the condition.

```javascript
let i = 0;
do {
    console.log("Do-while loop iteration: " + i);
    i++;
} while (i < 5);
```

Here:
- The code inside the `do` block runs first.
- After that, the condition `i < 5` is checked.

## Break and Continue Statements

### Break Statement
The `break` statement exits the loop entirely, stopping any further iterations.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}
```

### Continue Statement
The `continue` statement skips the current iteration and proceeds to the next one.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip iteration when i equals 5
    }
    console.log(i);
}
```

## Example Use Cases

### For Loop Example
A `for` loop can be used to iterate over an array of items.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### While Loop Example
A `while` loop can be used when waiting for a certain condition to be true.

```javascript
let num = 0;
while (num < 10) {
    console.log(num);
    num += 2; // Increment by 2
}
```

### Do-While Loop Example
A `do-while` loop ensures the code inside runs at least once.

```javascript
let password = "";
do {
    password = prompt("Enter your password:");
} while (password !== "secret");
```

## Best Practices

- **Avoid Infinite Loops**: Make sure your loops have a condition that eventually becomes false. Infinite loops can cause programs to crash or freeze.
  
```javascript
// Infinite loop (bad practice)
while (true) {
    console.log("This will run forever!");
}
```

- **Use the Right Loop**: Choose the loop that makes your code clear and easy to understand. Use `for` loops when you know how many times to iterate, and `while` loops when you're unsure.

## Conclusion
Loops are powerful tools in JavaScript that help us repeat tasks efficiently. Once you get comfortable with loops, you'll find many use cases where they can simplify your code and save time.

## Resources
- [MDN Web Docs: Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript.info: Loops](https://javascript.info/while-for)
