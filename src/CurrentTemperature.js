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
        <span>
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="CurrentTemperature">
        <span className="temp">{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
