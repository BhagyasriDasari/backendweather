Backend Weather API
Overview
The Backend Weather API is a Node.js application designed to fetch and provide weather information based on user input. It uses SQLite as its database to store and manage weather data. The API fetches real-time weather data from an external source and serves it through a RESTful API.

Features
Fetch Weather Data: Retrieves current weather information for a specified city using an external weather API (e.g., OpenWeatherMap).
Data Storage: Stores weather data in an SQLite database, allowing for historical data retrieval and analysis.
API Endpoints: Provides endpoints to access weather data and manage records.
Technologies Used
Node.js: Server-side JavaScript runtime environment.
Express: Web application framework for Node.js.
SQLite: Lightweight database engine for storing weather data.
Axios: Promise-based HTTP client for making requests to the weather API.

npm install
Setup Environment Variables
Create a .env file in the root directory with the following content:

makefile
Copy code
API_KEY=your_weather_api_key
Run the Server

bash
Copy code
node app.js
API Endpoints
GET /weather/{city}: Fetches current weather data for the specified city.
Parameters: city - Name of the city (e.g., Venice).
Response: JSON object with weather details including temperature, humidity, and conditions.
Example
To get the weather for Venice, navigate to:


deployed link: https://backendweather.onrender.com/weather/Venice