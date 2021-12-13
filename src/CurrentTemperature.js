import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="CurrentTemperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
        <div className="feelslike">
          Feels like {Math.round(props.feelslike)} °C
        </div>
      </span>
    );
  } else {
    return (
      <span className="CurrentTemperature">
        <span className="temp">{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
        <div className="feelslike">
          Feels like {Math.round((props.feelslike * 9) / 5 + 32)} °F
        </div>
      </span>
    );
  }
}
