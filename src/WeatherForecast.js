import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIconForecast from "./WeatherIconForecast";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastDay, setForecastDay] = useState({});

  function showForecast(response) {
    console.log(response.data);
    setForecastDay({
      day: response.data.daily[0].dt,
      tempMax: response.data.daily[0].temp.max,
      tempMin: response.data.daily[0].temp.min,
      icon: response.data.daily[0].weather[0].icon,
    });
    setReady(true);
  }
  function searchForecast() {
    let apiKey = "764f76ba97a9561444a6ac3f4d76aa84";
    let lat = props.lat;
    let lon = props.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);
  }

  useEffect(
    function () {
      setReady(false);
    },
    [props.lat]
  );

  if (ready) {
    return (
      <div className="row WeatherForecast">
        <div className="col">
          <div>{forecastDay.day}</div>
          <div>
            <WeatherIconForecast icon={forecastDay.icon} />
          </div>
          <div>
            <span className="max">{Math.round(forecastDay.tempMax)}°</span>
            <span className="min">{Math.round(forecastDay.tempMin)}°</span>
          </div>
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
