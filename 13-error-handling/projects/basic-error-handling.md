# Simple Error Handling Techniques

## Overview

This README covers essential error handling techniques in JavaScript, focusing on fundamental concepts that help developers manage errors effectively in their applications. Through this document, students will gain a solid understanding of various error handling methods and implement them in a simple project.

## Table of Contents

- [What is Error Handling?](#what-is-error-handling)
- [Types of Errors](#types-of-errors)
- [Basic Error Handling Techniques](#basic-error-handling-techniques)
- [Project: Simple Error Handling Example](#project-simple-error-handling-example)
- [Conclusion](#conclusion)

## What is Error Handling?

Error handling is a programming practice that involves anticipating and responding to potential errors in a program's execution. Proper error handling improves the robustness and reliability of applications, ensuring they can gracefully handle unexpected situations.

## Types of Errors

1. **Syntax Errors**: Occur when the code is incorrectly written and cannot be parsed (e.g., missing parentheses).
2. **Runtime Errors**: Happen during the execution of the program when an invalid operation is attempted (e.g., dividing by zero).
3. **Logical Errors**: Errors that produce incorrect results but do not prevent the program from running.

## Basic Error Handling Techniques

### 1. Try-Catch Blocks

A `try-catch` block allows developers to define a code segment to be tested for errors while executing. If an error occurs, control is passed to the `catch` block.

```javascript
try {
    // Code that may throw an error
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
}
```

### 2. Using `finally`

The `finally` block can be used to execute code after the `try` and `catch` blocks, regardless of whether an error was thrown.

```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Handle the error
} finally {
    // Code that will run regardless of an error
    console.log("This will always run.");
}
```

### 3. Custom Error Messages

Providing custom error messages helps in debugging and offers better feedback to users.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
```

## Project: Simple Error Handling Example

### Description

In this project, you will create a simple calculator application that demonstrates basic error handling techniques. The application will perform division and handle potential errors gracefully.

### Objectives

- Implement error handling using try-catch blocks.
- Provide user-friendly error messages.
- Demonstrate the use of `finally` to run cleanup code.

### Instructions

1. **Set Up the Project**:
   - Create a new HTML file named `index.html`.

### Example Code for `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #result { margin-top: 20px; }
        .error { color: red; }
    </style>
</head>
<body>
    <h1>Simple Calculator</h1>
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button onclick="calculate()">Divide</button>
    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
```

2. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    try {
        const result = divide(num1, num2);
        resultDiv.innerHTML = `Result: ${result}`;
    } catch (error) {
        resultDiv.innerHTML = `<span class="error">${error.message}</span>`;
    } finally {
        console.log("Calculation attempted.");
    }
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
```

### 3. Run the Application

Open the `index.html` file in a web browser. Enter two numbers in the input fields and click the "Divide" button. The application will display the result or an error message if an attempt to divide by zero is made.

### Expected Outcome

- If the user enters valid numbers, the division result will be displayed.
- If the second number is zero, the application will catch the error and display "Division by zero is not allowed."

## Conclusion

Understanding and implementing basic error handling techniques is essential for building robust applications. By using try-catch blocks, providing meaningful error messages, and using the `finally` construct, developers can ensure their applications handle errors gracefully and improve the user experience.
