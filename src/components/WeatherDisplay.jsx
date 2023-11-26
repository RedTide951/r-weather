import React from "react";
import WeatherInfo from "./WeatherInfo";

const WeatherDisplay = ({ city }) => {
  const renderWeatherData = (weatherData) => {
    if (weatherData) {
      return (
        <div>
          <h2>Location: {weatherData.name}</h2>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Air Temperature: {weatherData.main.temp}°C</p>
          <p>Min Temperature: {weatherData.main.temp_min}°C</p>
          <p>Max Temperature: {weatherData.main.temp_max}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      );
    }
    return <p>No weather data available</p>;
  };

  return <WeatherInfo city={city}>{renderWeatherData}</WeatherInfo>;
};

export default WeatherDisplay;
