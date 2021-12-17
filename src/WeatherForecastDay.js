import React from "react";
import WeatherIconForecast from "./WeatherIconForecast";

export default function WeatherForecastDay(props) {
  function dayName() {
    let date = new Date(props.forecastData.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return <div>{day}</div>;
  }
  return (
    <div className="WeatherForecastDay">
      <div>{dayName()}</div>
      <div>
        <WeatherIconForecast icon={props.forecastData.weather[0].icon} />
      </div>
      <div>
        <span className="max">{Math.round(props.forecastData.temp.max)}°</span>
        <span className="min">{Math.round(props.forecastData.temp.min)}°</span>
      </div>
    </div>
  );
}
