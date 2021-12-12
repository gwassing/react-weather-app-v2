import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiNightAltCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiThunderstorm } from "weather-icons-react";
import { WiSnow } from "weather-icons-react";
import { WiFog } from "weather-icons-react";

export default function WeatherIcon(props) {
  console.log(props.icon);

  if (props.icon === "01d") {
    return <WiDaySunny size={80} />;
  } else if (props.icon === "01n") {
    return <WiNightClear size={80} />;
  } else if (props.icon === "02d") {
    return <WiDayCloudy size={80} />;
  } else if (props.icon === "02n") {
    return <WiNightAltCloudy size={80} />;
  } else if (
    props.icon === "03d" ||
    props.icon === "03n" ||
    props.icon === "04d" ||
    props.icon === "04n"
  ) {
    return <WiCloud size={80} />;
  } else if (
    props.icon === "09d" ||
    props.icon === "09n" ||
    props.icon === "10d" ||
    props.icon === "10n"
  ) {
    return <WiRain size={80} />;
  } else if (props.icon === "11d" || props.icon === "11n") {
    return <WiThunderstorm size={80} />;
  } else if (props.icon === "13d" || props.icon === "13n") {
    return <WiSnow size={80} />;
  } else if (props.icon === "50d" || props.icon === "50n") {
    return <WiFog size={80} />;
  }
}
