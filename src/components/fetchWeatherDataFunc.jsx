import axios from "axios";

const fetchWeatherData = async (city, setWeatherData) => {
  const apiKey = "03e06b28765421c4b35786154e2bd519"; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    setWeatherData(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export default fetchWeatherData;
