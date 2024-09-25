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
        body { font-family: Arial, sans-serif; }
        #weather { margin-top: 20px; }
        #error { color: red; }
    </style>
</head>
<body>
    <h1>Weather App</h1>
    <input type="text" id="city-input" placeholder="Enter city name">
    <button id="get-weather">Get Weather</button>
    <div id="weather"></div>
    <div id="error"></div>

    <script src="script.js"></script>
</body>
</html>
```

2. **Create the JavaScript File**:
   - Create a new JavaScript file named `script.js`.

### Example Code for `script.js`

```javascript
document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            document.getElementById('error').textContent = ''; // Clear previous errors
        })
        .catch(error => {
            document.getElementById('error').textContent = error.message;
            document.getElementById('weather').innerHTML = ''; // Clear previous weather data
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
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
```

Feel free to adapt this README to better fit your curriculum or add additional details as needed!
