# Project: Create a Digital Clock

## Overview

In this project, students will create a digital clock that displays the current time in hours, minutes, and seconds. The clock will update every second to show the real-time changes, helping students learn about manipulating time in JavaScript and updating the DOM dynamically.

## Table of Contents

- [Objectives](#objectives)
- [Project Description](#project-description)
- [Instructions](#instructions)
- [Example Code](#example-code)
- [Styling the Clock](#styling-the-clock)
- [Testing the Project](#testing-the-project)
- [Conclusion](#conclusion)

## Objectives

- Learn how to work with the `Date` object in JavaScript.
- Understand how to update the DOM dynamically.
- Gain experience with setting intervals for periodic updates.

## Project Description

The digital clock will display the current time and will update every second. This project will provide hands-on experience in handling time-related functions in JavaScript and will familiarize students with the basics of DOM manipulation.

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
    <title>Digital Clock</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="clock" id="clock"></div>
    <script src="script.js"></script>
</body>
</html>
```

2. **Create the CSS File**:
   - Create a new CSS file named `styles.css` to style the clock.

### Example Code for `styles.css`

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    color: white;
    font-family: 'Arial', sans-serif;
}

.clock {
    font-size: 60px;
    background-color: #3d66c9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

3. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
```

4. **Run the Application**:
   - Open the `index.html` file in a web browser to view your digital clock. The clock should display the current time and update every second.

## Testing the Project

- Ensure the clock displays the correct current time and updates every second.
- Test in different browsers to check for compatibility.

## Conclusion

Congratulations on creating your digital clock! This project has introduced you to essential concepts of JavaScript, including working with the `Date` object and dynamically updating the DOM. You can extend this project by adding features such as different time zones, AM/PM format, or even a stopwatch functionality.
```

Feel free to adapt this README to your specific needs or add any additional features you might want to include in the project!
