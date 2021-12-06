import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  let [ready, setReady] = useState(false);
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setReady(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      city: response.data.name,
      date: "Monday 6 dec",
    });
  }

  function searchWeather() {
    let apiKey = "d4e31f25da5e889fefeac7617a05a07c";
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
        <h1>{weather.city}</h1>
        <h2>{weather.date}</h2>
        <div className="row currentWeather">
          <div className="col">
            <img
              className="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt=""
            />
            <span className="temp">{Math.round(weather.temperature)}</span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
          <div className="col">
            <ul>
              <li>{weather.description}</li>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {Math.round(weather.wind)} m/s</li>
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
