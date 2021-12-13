import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.info.city}, {props.info.country}
      </h1>

      <h2>
        <FormattedDate date={props.info.date} />
      </h2>

      <div className="row currentWeather">
        <div className="col">
          <WeatherIcon icon={props.info.icon} />

          <CurrentTemperature
            celsius={props.info.temperature}
            feelslike={props.info.feelslike}
          />
        </div>
        <div className="col">
          <ul>
            <li>{props.info.description}</li>

            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {Math.round(props.info.wind)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
