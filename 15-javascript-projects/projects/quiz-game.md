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
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9;
    font-family: 'Arial', sans-serif;
}

.quiz-container {
    width: 80%;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

button {
    background-color: #3d66c9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
}

button:hover {
    background-color: #2a4f9a;
}
```

3. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.textContent = question.question;
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
    }
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        showScore();
    }
});

function showScore() {
    questionContainer.classList.add('hide');
    answersContainer.classList.add('hide');
    scoreContainer.style.display = 'block';
    scoreElement.textContent = score;
}

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

Feel free to modify this README to include additional features or instructions that suit your project's requirements!
