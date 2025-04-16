import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import locationIcon from "../../assets/location_img.svg";
import temperatureIcon from "../../assets/temperature_img.svg";
import humidityIcon from "../../assets/humidity_img.svg";
import sunnyIcon from "../../assets/sunny_img.svg";
import cloudIcon from "../../assets/cloudy_img.svg";
import RainIcon from "../../assets/Rain_img.svg";
import SnowIcon from "../../assets/snow_img.svg";

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: "--°C",
    condition: "--",
    location: "--", // Always set to Tirunelveli
    humidity: "--%",
    icon: sunnyIcon, // Default icon
  });

  const API_KEY = "c90c42c92b87b8c6431e6b6568e23bd0"; // Replace with your OpenWeatherMap API Key

  useEffect(() => {
    const TIRUNELVELI_LAT = 8.7139;
    const TIRUNELVELI_LON = 77.7567;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${TIRUNELVELI_LAT}&lon=${TIRUNELVELI_LON}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        const weatherData = res.data;
        const weatherCondition = weatherData.weather[0].main;
        const weatherIcons = {
          Clear: sunnyIcon,
          Clouds: cloudIcon,
          Rain: RainIcon,
          Snow: SnowIcon,
        };

        setWeather({
          temp: `${weatherData.main.temp}°C`,
          condition: weatherCondition,
          location: "Tirunelveli", // Always display "Tirunelveli"
          humidity: `${weatherData.main.humidity}%`,
          icon: weatherIcons[weatherCondition] || sunnyIcon, // Default to sunny
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div className="weather-container">
      <div className="condition weather-icon">
        <img src={weather.icon} alt="Weather Condition" />
        <p>{weather.condition}</p>
      </div>

      <div className="location weather-icon">
        <img src={locationIcon} alt="Location" />
        <p>{weather.location}</p>
      </div>

      <div className="temperature weather-icon">
        <img src={temperatureIcon} alt="Temperature" />
        <p>{weather.temp}</p>
      </div>

      <div className="humidity weather-icon">
        <img src={humidityIcon} alt="Humidity" />
        <p>{weather.humidity}</p>
      </div>
    </div>
  );
};

export default Weather;
