import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="search">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                className="form-control"
                placeholder="Search location"
                autoComplete="off"
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
      <h1>Stockholm</h1>
      <h2>Tuesday 15th Nov</h2>
      <div className="row currentWeather">
        <div className="col">
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
          />
          <span className="temp">-12</span>
          <span className="units">
            <a href="/">°C</a> |<a href="/">°F</a>
          </span>
        </div>
        <div className="col">
          <ul>
            <li>Clouds</li>
            <li>Humidity: 75%</li>
            <li>Wind: 3 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
