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
    <div id="clock"></div>
    <script>
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            document.getElementById('clock').innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock(); // Initial call
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
    <div id="quiz"></div>
    <div id="score"></div>
    <script>
        const questions = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Lisbon"],
                answer: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                answer: "Mars"
            }
        ];

        let score = 0;

        function displayQuestion(index) {
            const quizDiv = document.getElementById('quiz');
            const questionData = questions[index];
            quizDiv.innerHTML = `<div class="question">${questionData.question}</div>`;
            questionData.options.forEach(option => {
                quizDiv.innerHTML += `<button onclick="checkAnswer('${option}', '${index}')">${option}</button>`;
            });
        }

        function checkAnswer(selected, index) {
            if (selected === questions[index].answer) {
                score++;
            }
            if (index < questions.length - 1) {
                displayQuestion(index + 1);
            } else {
                displayScore();
            }
        }

        function displayScore() {
            const scoreDiv = document.getElementById('score');
            scoreDiv.innerText = `Your score: ${score}/${questions.length}`;
        }

        displayQuestion(0);
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
    <div id="story"></div>
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
            const currentStory = story[location];
            storyDiv.innerHTML = `<p>${currentStory.text}</p>`;
            for (const choice in currentStory.choices) {
                storyDiv.innerHTML += `<button onclick="displayStory('${currentStory.choices[choice]}')">${choice}</button>`;
            }
        }

        displayStory('start');
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
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <select id="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    </select>
    <button onclick="calculate()">Calculate</button>
    <p id="result"></p>
    <script>
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            let result;

            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                    break;
            }

            document.getElementById('result').innerText = `Result: ${result}`;
        }
    </script>
</body>
</html>
```

## Getting Started

To get started with these projects:

1. **Clone the Repository**: Use the following command to clone the repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/javascript-projects.git
   ```

2. **Navigate to the Project Directory**: Use the terminal to navigate to the directory of the project you want to work on.
   ```bash
   cd javascript-projects/<project-name>
   ```

3. **Open in a Browser**: Open the HTML files in your web browser to see your projects in action.

## Conclusion

These projects will help you reinforce your understanding of JavaScript and its applications. By completing each project, you will gain hands-on experience that will be valuable in your development journey. Don't hesitate to modify and expand upon these projects to further enhance your skills!
```

Feel free to modify any

 sections to better fit your requirements or add additional projects!
