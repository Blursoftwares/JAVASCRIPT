# Project: Build a Simple Calculator

## Overview

In this project, students will create a simple calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. This project will help students understand how to handle user input, manage state, and perform calculations in JavaScript.

## Table of Contents

- [Objectives](#objectives)
- [Project Description](#project-description)
- [Instructions](#instructions)
- [Example Code](#example-code)
- [Styling the Calculator](#styling-the-calculator)
- [Testing the Project](#testing-the-project)
- [Conclusion](#conclusion)

## Objectives

- Learn how to structure a calculator using HTML and CSS.
- Understand how to handle user input and display results dynamically.
- Gain experience with functions and event handling in JavaScript.

## Project Description

The calculator will have a simple user interface with buttons for numbers and operations. Users can click buttons to input numbers and select operations to perform calculations. The final result will be displayed on the screen.

## Instructions

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
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator-container">
        <input type="text" id="display" disabled />
        <div class="button-container">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('/')">/</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('*')">*</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToDisplay('+')">+</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

2. **Create the CSS File**:
   - Create a new CSS file named `styles.css` to style the calculator.

### Example Code for `styles.css`

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9;
    font-family: 'Arial', sans-serif;
}

.calculator-container {
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

#display {
    width: 100%;
    height: 40px;
    font-size: 24px;
    text-align: right;
    margin-bottom: 10px;
}

.button-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    background-color: #3d66c9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    font-size: 18px;
}

button:hover {
    background-color: #2a4f9a;
}
```

3. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
// Function to append a value to the calculator display
function appendToDisplay(value) {
    const display = document.getElementById('display'); // Get the display element
    display.value += value; // Append the value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display'); // Get the display element
    display.value = ''; // Clear the display
}

// Function to calculate the result based on the current display value
function calculateResult() {
    const display = document.getElementById('display'); // Get the display element
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch (error) {
        display.value = 'Error'; // Show an error message if evaluation fails
    }
}
```

4. **Run the Application**:
   - Open the `index.html` file in a web browser to start your calculator. You should be able to perform calculations by clicking the buttons.

## Testing the Project

- Test all buttons to ensure they display the correct numbers and operations.
- Verify that calculations return accurate results.
- Check the "C" button to ensure it clears the display.

## Conclusion

Congratulations on building your simple calculator! This project has introduced you to fundamental concepts in programming, including handling user input, performing calculations, and dynamically updating the UI. You can enhance this project further by adding more features such as keyboard support, scientific operations, or memory functions.
```

Feel free to modify the README further to include any additional features or instructions you may want to implement in your calculator project!
