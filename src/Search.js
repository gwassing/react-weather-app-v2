import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Timestamp from "./Timestamp";

export default function Search(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
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
    let apiKey = "764f76ba97a9561444a6ac3f4d76aa84";
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
        <WeatherInfo info={weatherData} />
        <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
        <Timestamp time={weatherData.date} />
      </div>
    );
  } else {
    searchWeather();

    return <div> Loading.... please wait </div>;
  }
}
