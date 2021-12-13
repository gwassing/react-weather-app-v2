import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function Search(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function searchWeather() {
    let apiKey = "6f279121b4b50aa10b56f97ac402d643";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  if (ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="search">
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search location"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-outline-primary">
                  Current location
                </button>
              </div>
            </div>
          </div>
        </form>
        <h1>
          {weatherData.city}, {weatherData.country}
        </h1>

        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>

        <div className="row currentWeather">
          <div className="col">
            <WeatherIcon icon={weatherData.icon} />

            <CurrentTemperature celsius={weatherData.temperature} />
          </div>
          <div className="col">
            <ul>
              <li>{weatherData.description}</li>
              <li>Feels like {Math.round(weatherData.feelsLike)} °C</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {Math.round(weatherData.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    searchWeather();

    return <div> Loading.... please wait </div>;
  }
}
