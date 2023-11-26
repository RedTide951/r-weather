// WeatherInfo.js

const WeatherInfo = ({ city, children }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  console.log("WeatherData in WeatherInfo:", weatherData); // Add this line

  return <>{children(weatherData)}</>;
};
