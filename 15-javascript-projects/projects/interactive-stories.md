# Project: Create Interactive Stories

## Overview

In this project, students will create an interactive story application where users can make choices that affect the story's outcome. This project will help students understand the basics of programming logic, events, and DOM manipulation.

## Table of Contents

- [Objectives](#objectives)
- [Project Description](#project-description)
- [Instructions](#instructions)
- [Example Code](#example-code)
- [Styling the Story](#styling-the-story)
- [Testing the Project](#testing-the-project)
- [Conclusion](#conclusion)

## Objectives

- Learn how to structure a simple interactive story using JavaScript.
- Understand how to handle user inputs and make decisions based on those inputs.
- Gain experience in DOM manipulation to dynamically change the content displayed.

## Project Description

The interactive story will present a narrative where users can make choices at various points, leading to different endings based on their selections. This project will provide hands-on experience in event-driven programming and conditional logic.

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
    <title>Interactive Stories</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="story-container" id="story-container">
        <p id="story-text"></p>
        <div id="choices"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

2. **Create the CSS File**:
   - Create a new CSS file named `styles.css` to style the story.

### Example Code for `styles.css`

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: 'Arial', sans-serif;
}

.story-container {
    width: 60%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

button {
    background-color: #3d66c9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    margin: 5px;
}

button:hover {
    background-color: #2a4f9a;
}
```

3. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices');

const story = {
    start: {
        text: "You find yourself in a dark forest. What do you do?",
        choices: [
            { text: "Explore deeper into the forest.", next: 'deeper' },
            { text: "Turn back to the safety of the village.", next: 'village' }
        ]
    },
    deeper: {
        text: "You encounter a wild beast! Do you fight or flee?",
        choices: [
            { text: "Fight the beast.", next: 'fight' },
            { text: "Flee back to safety.", next: 'village' }
        ]
    },
    village: {
        text: "You are safe, but you wonder what adventures await in the forest.",
        choices: []
    },
    fight: {
        text: "You bravely fight the beast and emerge victorious! You are now a hero!",
        choices: []
    }
};

function showStory(node) {
    storyText.textContent = node.text;
    choicesContainer.innerHTML = '';
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showStory(story[choice.next]);
        choicesContainer.appendChild(button);
    });
}

// Start the story
showStory(story.start);
```

4. **Run the Application**:
   - Open the `index.html` file in a web browser to interact with your story. You should be able to make choices that change the storyline.

## Testing the Project

- Navigate through the interactive story to ensure all choices lead to the correct outcomes.
- Check that the text updates correctly based on user input.

## Conclusion

Congratulations on creating your interactive story! This project has introduced you to essential programming concepts such as conditionals, events, and DOM manipulation. You can extend this project by adding more branches to the story, creating a scoring system, or implementing graphics to enhance the storytelling experience.
```

Feel free to modify or expand upon this README to better suit your educational goals or to include more complex storylines and features!
