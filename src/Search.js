import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setReady(true);
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function searchWeather() {
    let apiKey = "6f279121b4b50aa10b56f97ac402d643";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleChange(event) {
    setCity(event.target.value);
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
        <h1>{weatherData.city}</h1>
        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>
        <div className="row currentWeather">
          <div className="col">
            <img
              className="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt=""
            />
            <span className="temp">{Math.round(weatherData.temperature)}</span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
          <div className="col">
            <ul>
              <li>{weatherData.description}</li>
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
