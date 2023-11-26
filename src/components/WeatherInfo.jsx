import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({ city, children }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "03e06b28765421c4b35786154e2bd519"; // Replace with your API key
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null); // Reset weather data on error
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return <>{children(weatherData)}</>;
};

export default WeatherInfo;
