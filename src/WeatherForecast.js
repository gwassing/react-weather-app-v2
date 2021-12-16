import React from "react";
import WeatherIconForecast from "./WeatherIconForecast";

export default function WeatherForecast() {
  return (
    <div className="row WeatherForecast">
      <div className="col">
        <div>Thu</div>
        <div>
          <WeatherIconForecast />
        </div>
        <div>
          <span className="max">19°</span>
          <span className="min">4°</span>
        </div>
      </div>
    </div>
  );
}
