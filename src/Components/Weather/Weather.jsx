import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        data.main.temp = (data.main.temp - 273.15).toFixed(2);
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
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <div className="city">
          {weatherData && (
            <div className="weather-info">
              <p >{weatherData.weather[0].description}</p>
              <p className="temperature">{weatherData.main.temp} °C</p>
              <h2 className="city-data">{weatherData.name}</h2>
            </div>
          )}
        </div>
        <div className="propriete"></div>
      </div>
    </div>
  );
}

export default Weather;




