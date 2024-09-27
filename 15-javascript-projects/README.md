# JavaScript Projects

## Overview

This section focuses on various JavaScript projects that help you apply your knowledge and skills in practical scenarios. Each project has its own set of requirements, objectives, and instructions to guide you through the development process.

## Table of Contents

- [Project 1: Digital Clock](#project-1-digital-clock)
- [Project 2: Quiz Game](#project-2-quiz-game)
- [Project 3: Interactive Stories](#project-3-interactive-stories)
- [Project 4: Simple Calculator](#project-4-simple-calculator)
- [Getting Started](#getting-started)
- [Conclusion](#conclusion)

## Project 1: Digital Clock

### Description

Create a digital clock that displays the current time and updates every second. This project will help you understand how to work with dates and times in JavaScript.

### Objectives

- Learn to use the `Date` object in JavaScript.
- Implement `setInterval` to update the clock every second.
- Format the time display.

### Instructions

1. Create an HTML file with a `<div>` to display the time.
2. Use JavaScript to get the current time and format it.
3. Update the time every second using `setInterval`.

### Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <style>
        body { text-align: center; font-family: Arial, sans-serif; }
        #clock { font-size: 48px; }
    </style>
</head>
<body>
    <div id="clock"></div> <!-- This div will display the current time -->
    <script>
        function updateClock() {
            const now = new Date(); // Get the current date and time
            const timeString = now.toLocaleTimeString(); // Format the time as a string
            document.getElementById('clock').innerText = timeString; // Update the clock display
        }
        setInterval(updateClock, 1000); // Update the clock every second
        updateClock(); // Initial call to display the time immediately
    </script>
</body>
</html>
```

## Project 2: Quiz Game

### Description

Build a simple quiz game that asks users multiple-choice questions and provides feedback on their answers.

### Objectives

- Learn to use event listeners and handle user input.
- Implement a scoring system.
- Store questions in an array.

### Instructions

1. Create an array of questions, each with a question, answer options, and the correct answer.
2. Display each question one at a time.
3. Keep track of the score and display it at the end.

### Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .question { margin-bottom: 20px; }
    </style>
</head>
<body>
    <div id="quiz"></div> <!-- This div will hold the quiz questions -->
    <div id="score"></div> <!-- This div will display the score -->
    <script>
        const questions = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Lisbon"],
                answer: "Paris" // Correct answer
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                answer: "Mars" // Correct answer
            }
        ];

        let score = 0; // Initialize score

        function displayQuestion(index) {
            const quizDiv = document.getElementById('quiz');
            const questionData = questions[index]; // Get the current question
            quizDiv.innerHTML = `<div class="question">${questionData.question}</div>`; // Display question
            questionData.options.forEach(option => {
                // Create a button for each option
                quizDiv.innerHTML += `<button onclick="checkAnswer('${option}', '${index}')">${option}</button>`;
            });
        }

        function checkAnswer(selected, index) {
            // Check if the selected answer is correct
            if (selected === questions[index].answer) {
                score++; // Increment score if correct
            }
            // Move to the next question or display score if last question
            if (index < questions.length - 1) {
                displayQuestion(index + 1);
            } else {
                displayScore(); // Display the final score
            }
        }

        function displayScore() {
            const scoreDiv = document.getElementById('score');
            scoreDiv.innerText = `Your score: ${score}/${questions.length}`; // Show the score
        }

        displayQuestion(0); // Start the quiz by displaying the first question
    </script>
</body>
</html>
```

## Project 3: Interactive Stories

### Description

Develop an interactive story application where users can choose different paths based on their decisions.

### Objectives

- Use JavaScript objects to manage story branches.
- Implement event listeners for user choices.
- Create a simple UI to display story text and choices.

### Instructions

1. Create an object that holds different story paths.
2. Display the current story text and options for the user to choose from.
3. Change the story based on the user's choices.

### Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Stories</title>
</head>
<body>
    <div id="story"></div> <!-- This div will display the current story text and choices -->
    <script>
        const story = {
            start: {
                text: "You are in a forest. Do you want to go left or right?",
                choices: {
                    left: "left",
                    right: "right"
                }
            },
            left: {
                text: "You encounter a river. Do you want to swim or go back?",
                choices: {
                    swim: "swim",
                    back: "start"
                }
            },
            right: {
                text: "You find a treasure chest! Do you want to open it or leave?",
                choices: {
                    open: "open",
                    leave: "start"
                }
            }
        };

        function displayStory(location) {
            const storyDiv = document.getElementById('story');
            const currentStory = story[location]; // Get the current story segment
            storyDiv.innerHTML = `<p>${currentStory.text}</p>`; // Display the story text
            for (const choice in currentStory.choices) {
                // Create a button for each choice
                storyDiv.innerHTML += `<button onclick="displayStory('${currentStory.choices[choice]}')">${choice}</button>`;
            }
        }

        displayStory('start'); // Start the story from the initial location
    </script>
</body>
</html>
```

## Project 4: Simple Calculator

### Description

Create a simple calculator that performs basic arithmetic operations (addition, subtraction, multiplication, and division).

### Objectives

- Learn to handle user input and output.
- Implement arithmetic operations using functions.
- Build a simple UI for the calculator.

### Instructions

1. Create an HTML form to capture user inputs (two numbers and an operation).
2. Implement functions to perform each arithmetic operation.
3. Display the result on the webpage.

### Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
</head>
<body>
    <h1>Simple Calculator</h1>
    <input type="number" id="num1" placeholder="Enter first number"> <!-- Input for first number -->
    <input type="number" id="num2" placeholder="Enter second number"> <!-- Input for second number -->
    <select id="operation"> <!-- Dropdown to select operation -->
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    </select>
    <button onclick="calculate()">Calculate</button> <!-- Button to trigger calculation -->
    <p id="result"></p> <!-- This paragraph will display the result -->
    <script>
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value); // Get first number
            const num2 = parseFloat(document.getElementById('num2').value); // Get second number
            const operation = document.getElementById('operation').value; // Get selected operation
            let result;

            // Perform calculation based on the selected operation
            switch (operation) {
                case 'add':
                    result = num1 + num2; // Addition
                    break;
                case 'subtract':
                    result = num1 - num2; // Subtraction
                    break;
                case 'multiply':
                    result = num1 * num2; // Multiplication
                    break;
                case '

divide':
                    result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; // Division with error handling
                    break;
            }
            document.getElementById('result').innerText = `Result: ${result}`; // Display the result
        }
    </script>
</body>
</html>
```

## Getting Started

To get started with these projects, simply copy the HTML code into your own files and open them in a web browser. Each project can be expanded with more features and functionality as you grow your JavaScript skills.

## Conclusion

These JavaScript projects provide a solid foundation for understanding how to manipulate the DOM, handle user input, and create interactive web applications. Feel free to modify and enhance these projects as you continue learning.
```

### Key Enhancements:
- **Structured Approach:** Each project now has a clear structure, including description, objectives, instructions, and example code.
- **Code Comments:** Each code snippet is now thoroughly commented to explain its purpose and functionality.
- **Consistent Formatting:** Maintained consistent formatting across all projects for a cohesive look.

This should provide a clearer and more comprehensive overview of your JavaScript projects! Let me know if you need any further adjustments or additions.
