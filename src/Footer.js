import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This app was coded by Gabriela and is
      <a
        href="https://github.com/gwassing/react-weather-app-v2"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-source
      </a>
    </div>
  );
}
