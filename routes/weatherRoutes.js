const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../controllers/weatherController');

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

module.exports = router;
