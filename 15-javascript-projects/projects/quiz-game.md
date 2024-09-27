# Project: Build a Quiz Game

## Overview

In this project, students will create an interactive quiz game that allows users to answer questions and receive feedback on their answers. The quiz will keep track of the user's score and provide a summary at the end. This project will help students understand the fundamentals of user interaction, arrays, functions, and event handling in JavaScript.

## Table of Contents

- [Objectives](#objectives)
- [Project Description](#project-description)
- [Instructions](#instructions)
- [Example Code](#example-code)
- [Styling the Quiz](#styling-the-quiz)
- [Testing the Project](#testing-the-project)
- [Conclusion](#conclusion)

## Objectives

- Learn how to structure a quiz using JavaScript arrays and objects.
- Understand how to handle user input and validate answers.
- Gain experience with dynamic HTML updates based on user interactions.

## Project Description

The quiz game will present users with multiple-choice questions, allowing them to select their answers. At the end of the quiz, users will receive a score based on their responses. This project will provide hands-on experience in event-driven programming and managing application state.

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
    <title>Quiz Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="quiz-container">
        <h1 id="quiz-title">Quiz Game</h1>
        <div id="question-container"></div>
        <div id="answers-container"></div>
        <button id="next-button">Next</button>
        <div id="score-container" style="display: none;">
            <h2>Your Score: <span id="score"></span></h2>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

2. **Create the CSS File**:
   - Create a new CSS file named `styles.css` to style the quiz.

### Example Code for `styles.css`

```css
body {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    height: 100vh; /* Full viewport height */
    background-color: #f9f9f9; /* Light background color */
    font-family: 'Arial', sans-serif; /* Font styling */
}

.quiz-container {
    width: 80%; /* Responsive width */
    max-width: 600px; /* Max width for larger screens */
    background-color: #fff; /* White background for the quiz container */
    padding: 20px; /* Padding inside the container */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

button {
    background-color: #3d66c9; /* Button color */
    color: white; /* Text color */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners for button */
    padding: 10px 15px; /* Padding inside button */
    cursor: pointer; /* Pointer cursor on hover */
}

button:hover {
    background-color: #2a4f9a; /* Darker button color on hover */
}
```

3. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
// Array of questions for the quiz
const questions = [
    {
        question: "What is the capital of France?", // Question text
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"], // Possible answers
        correct: 2 // Index of the correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1 // Index of the correct answer
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3 // Index of the correct answer
    }
];

let currentQuestionIndex = 0; // Keep track of the current question
let score = 0; // User's score

// Get references to HTML elements
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score
    nextButton.classList.add('hide'); // Hide next button initially
    showQuestion(questions[currentQuestionIndex]); // Show the first question
}

// Function to display a question
function showQuestion(question) {
    questionContainer.textContent = question.question; // Set question text
    answersContainer.innerHTML = ''; // Clear previous answers
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button'); // Create answer button
        button.textContent = answer; // Set button text
        button.onclick = () => selectAnswer(index); // Attach click event
        answersContainer.appendChild(button); // Add button to answers container
    });
}

// Function to handle answer selection
function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex]; // Get current question
    if (selectedIndex === question.correct) { // Check if answer is correct
        score++; // Increment score for correct answer
    }
    nextButton.classList.remove('hide'); // Show next button
}

// Event listener for the next button
nextButton.addEventListener('click', () => {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]); // Show next question
        nextButton.classList.add('hide'); // Hide next button again
    } else {
        showScore(); // All questions answered, show score
    }
});

// Function to display the user's score
function showScore() {
    questionContainer.classList.add('hide'); // Hide question and answers
    answersContainer.classList.add('hide');
    scoreContainer.style.display = 'block'; // Show score container
    scoreElement.textContent = score; // Display score
}

// Start the quiz when the script loads
startQuiz();
```

4. **Run the Application**:
   - Open the `index.html` file in a web browser to start your quiz game. You should be able to answer questions and see your score at the end.

## Testing the Project

- Ensure that the quiz progresses correctly from question to question.
- Check that the scoring system works accurately.

## Conclusion

Congratulations on building your quiz game! This project has introduced you to important programming concepts such as arrays, functions, and event handling in JavaScript. You can extend this project by adding more questions, categories, or even a timer for each question to increase the challenge!
```

### Changes Made:
- Added comments to the JavaScript code to clarify the purpose of variables and functions, as well as the steps being taken within the code. 
- Comments help explain the flow of the application, making it easier for students to understand the logic and functionality.
