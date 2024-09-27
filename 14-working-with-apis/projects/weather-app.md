# Project: Create a Weather App Using an API

## Overview

In this project, students will develop a simple weather application that fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api). This project will help you understand how to work with APIs, handle asynchronous operations, and display data dynamically on a webpage.

## Table of Contents

- [What is OpenWeatherMap API?](#what-is-openweathermap-api)
- [Project Description](#project-description)
- [Objectives](#objectives)
- [Instructions](#instructions)
- [Example Code](#example-code)
- [Testing the Project](#testing-the-project)
- [Conclusion](#conclusion)

## What is OpenWeatherMap API?

The OpenWeatherMap API provides access to weather data for any location in the world. You can get current weather information, forecasts, and historical data by making HTTP requests to their API endpoints.

## Project Description

In this project, you will create a weather app that allows users to input a city name and fetch the current weather details for that city. The app will display the temperature, weather conditions, and an icon representing the current weather.

## Objectives

- Learn how to make API calls using the `fetch` API.
- Handle user input and display the resulting data dynamically.
- Understand how to manage asynchronous JavaScript operations.

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
    <title>Weather App</title>
    <style>
        body { font-family: Arial, sans-serif; } /* Sets the font for the webpage */
        #weather { margin-top: 20px; } /* Adds space above the weather display */
        #error { color: red; } /* Sets the error text color to red */
    </style>
</head>
<body>
    <h1>Weather App</h1>
    <input type="text" id="city-input" placeholder="Enter city name"> <!-- Input field for city name -->
    <button id="get-weather">Get Weather</button> <!-- Button to fetch weather data -->
    <div id="weather"></div> <!-- Container for displaying weather information -->
    <div id="error"></div> <!-- Container for displaying error messages -->

    <script src="script.js"></script> <!-- Link to the JavaScript file -->
</body>
</html>
```

2. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
// Add event listener to the button to trigger the getWeather function when clicked
document.getElementById('get-weather').addEventListener('click', getWeather);

// Function to fetch weather data based on the city name input
function getWeather() {
    const city = document.getElementById('city-input').value; // Get the city name from the input field
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    // Construct the API URL with the city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data from the OpenWeatherMap API
    fetch(url)
        .then(response => {
            // Check if the response is not OK (i.e., city not found)
            if (!response.ok) {
                throw new Error('City not found'); // Throw an error for invalid city
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            displayWeather(data); // Call function to display weather data
            document.getElementById('error').textContent = ''; // Clear previous errors
        })
        .catch(error => {
            // Handle errors by displaying the error message
            document.getElementById('error').textContent = error.message; // Show the error message
            document.getElementById('weather').innerHTML = ''; // Clear previous weather data
        });
}

// Function to display the fetched weather data on the webpage
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather'); // Get the weather display container
    // Create HTML content to display weather information
    weatherDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2> <!-- Display the city name -->
        <p>Temperature: ${data.main.temp} °C</p> <!-- Display the temperature -->
        <p>Condition: ${data.weather[0].description}</p> <!-- Display the weather condition -->
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon"> <!-- Display weather icon -->
    `;
}
```

3. **Get Your API Key**:
   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to get your free API key.
   - Replace `YOUR_API_KEY` in `script.js` with your actual API key.

4. **Run the Application**:
   - Open the `index.html` file in a web browser.
   - Enter a city name in the input box and click the "Get Weather" button to fetch and display the weather information.

## Testing the Project

1. Test the app by entering various city names, including both valid and invalid ones.
2. Check the console for any error messages if the weather does not display correctly.

## Conclusion

This project demonstrates how to create a simple weather application using an API. It highlights the importance of understanding asynchronous programming and how to handle user inputs in a web application. Feel free to extend the functionality by adding more features, such as a 5-day weather forecast or geolocation support!

---
