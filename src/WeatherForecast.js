import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState({});

  function showForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  function searchForecast() {
    let apiKey = "764f76ba97a9561444a6ac3f4d76aa84";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);
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
        {forecast.map(function (forecast, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay forecastData={forecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
