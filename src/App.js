import React, { useState } from "react";
import "./App.css";
import SimpleContainer from "./components/simpleContainer";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import SearchAppBar from "./components/SearchAppBar";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <SearchAppBar onCityChange={handleCityChange} />
      <SimpleContainer>
        <WeatherInfo city={city}>
          {(weatherData) => <WeatherDisplay weatherData={weatherData} />}
        </WeatherInfo>
      </SimpleContainer>
    </div>
  );
}

export default App;
