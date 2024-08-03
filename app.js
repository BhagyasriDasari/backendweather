require('dotenv').config();
const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/weather', weatherRoutes);  // Route for weather data

// Handle 404 errors for any other routes
app.use((req, res) => {
  res.status(404).send('server is running');
});

app.get('/', (req, res) => {
    res.send('Welcome to the Weather API. Use /weather/{city} to get weather data.');
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
