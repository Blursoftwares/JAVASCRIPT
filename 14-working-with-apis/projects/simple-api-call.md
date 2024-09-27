# Project: Demonstrating a Simple API Call

## Overview

In this project, students will learn how to make a simple API call using JavaScript. The project will demonstrate how to retrieve data from an API and display it on a webpage. This exercise will enhance your understanding of working with APIs and handling asynchronous operations.

## Table of Contents

- [What is an API?](#what-is-an-api)
- [Project Description](#project-description)
- [Objectives](#objectives)
- [Instructions](#instructions)
- [Example Code](#example-code)
- [Testing the Project](#testing-the-project)
- [Conclusion](#conclusion)

## What is an API?

An Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other. APIs are commonly used to access web services, enabling developers to retrieve or send data to remote servers.

## Project Description

In this project, you will create a simple webpage that fetches and displays random user data from the [Random User Generator API](https://randomuser.me). The project will utilize the `fetch` API to make the call and handle the response.

## Objectives

- Learn how to make GET requests using the `fetch` API.
- Understand how to handle asynchronous operations.
- Display fetched data on a webpage.

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
    <title>Random User Generator</title>
    <style>
        body { font-family: Arial, sans-serif; } /* Sets font for the body */
        #user { margin-top: 20px; } /* Adds space above the user display area */
    </style>
</head>
<body>
    <h1>Random User Generator</h1>
    <button id="fetch-user">Fetch Random User</button> <!-- Button to fetch user -->
    <div id="user"></div> <!-- Area to display user info -->

    <script src="script.js"></script> <!-- Link to the JavaScript file -->
</body>
</html>
```

2. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
// Add an event listener to the button to trigger the fetch function when clicked
document.getElementById('fetch-user').addEventListener('click', fetchRandomUser);

// Function to fetch a random user from the API
function fetchRandomUser() {
    fetch('https://randomuser.me/api/') // API endpoint
        .then(response => {
            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Handle response error
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            displayUser(data.results[0]); // Pass the first user result to display function
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error); // Log errors to the console
        });
}

// Function to display the user information on the webpage
function displayUser(user) {
    const userDiv = document.getElementById('user'); // Select the user display area
    userDiv.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2> <!-- Display user name -->
        <img src="${user.picture.medium}" alt="User Picture"> <!-- Display user picture -->
        <p>Email: ${user.email}</p> <!-- Display user email -->
        <p>Location: ${user.location.city}, ${user.location.country}</p> <!-- Display user location -->
    `;
}
```

### 3. Run the Application

Open the `index.html` file in a web browser. Click the "Fetch Random User" button to make an API call and display a random user’s information.

## Testing the Project

1. Open the console in your browser's developer tools to view any error messages.
2. Click the "Fetch Random User" button multiple times to see different random users being displayed.

## Conclusion

This project demonstrates how to make simple API calls using JavaScript. Understanding how to interact with APIs is crucial for building dynamic web applications that rely on external data sources. Experiment with different APIs to expand your skills further!
```

### Key Additions:
- Comments have been added throughout the HTML and JavaScript code to clarify the purpose of each section and explain the code functionality.
- Feel free to expand on any sections or modify the comments as needed to fit your teaching style!
