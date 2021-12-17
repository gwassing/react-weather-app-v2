import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIconForecast from "./WeatherIconForecast";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState({});

  function showForecast(response) {
    console.log(response.data);
    setForecast({
      date: new Date(response.data.daily[0].dt * 1000),
      tempMax: response.data.daily[0].temp.max,
      tempMin: response.data.daily[0].temp.min,
      icon: response.data.daily[0].weather[0].icon,
    });
    setReady(true);
  }
  function searchForecast() {
    let apiKey = "764f76ba97a9561444a6ac3f4d76aa84";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);
  }

  function dayName() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[forecast.date.getDay()];
    return <div>{day}</div>;
  }

  useEffect(
    function () {
      setReady(false);
    },
    [props.coordinates]
  );

  if (ready) {
    return (
      <div className="row WeatherForecast">
        <div className="col">
          <div>{dayName()}</div>
          <div>
            <WeatherIconForecast icon={forecast.icon} />
          </div>
          <div>
            <span className="max">{Math.round(forecast.tempMax)}°</span>
            <span className="min">{Math.round(forecast.tempMin)}°</span>
          </div>
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
