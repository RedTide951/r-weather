import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  console.log("Received Weather Data in WeatherDisplay:", weatherData);

  return (
    <div>
      {weatherData && (
        <>
          <h2>Location: {weatherData.name}</h2>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Air Temperature: {weatherData.main.temp}°C</p>
          <p>Min Temperature: {weatherData.main.temp_min}°C</p>
          <p>Max Temperature: {weatherData.main.temp_max}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
