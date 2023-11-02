import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    console.log("City:", city);
    console.log("API Key:", process.env.REACT_APP_API_KEY);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleFormSubmit}>
          <input
            className="input"
            required
            type="text"
            id="City"
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit"> <span className="material-symbols-outlined">search</span></button>
        </form>
        <div className="city">
          {weatherData && (
            <div className="weather-info">
              <h2>{weatherData.name}</h2>
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
        <div className="propriete"></div>
      </div>
    </div>
  );
}

export default Weather;

