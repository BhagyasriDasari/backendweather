const axios = require('axios');
const db = require('../config/db');

const getWeatherData = async (city) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  try {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric'
      }
    });

    const weatherData = response.data;
    const { temp } = weatherData.main;
    const humidity = weatherData.main.humidity;
    const weatherConditions = weatherData.weather[0].description;

    // Store the data in the database
    db.run(
      `INSERT INTO WeatherData (city_name, temperature, humidity, weather_conditions) VALUES (?, ?, ?, ?)`,
      [city, temp, humidity, weatherConditions],
      (err) => {
        if (err) {
          console.error('Failed to store weather data:', err.message);
        }
      }
    );

    // Return the formatted weather data
    return {
      city: weatherData.name,
      temperature: temp,
      humidity: humidity,
      conditions: weatherConditions
    };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw new Error('Error fetching weather data');
  }
};

module.exports = { getWeatherData };
