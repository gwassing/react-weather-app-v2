import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  if (date === 1 || date === 21 || date === 31) {
    return (
      <div>
        {day}, {date}st of {month}
      </div>
    );
  }
  if (date === 2 || date === 22) {
    return (
      <div>
        {day}, {date}nd of {month}
      </div>
    );
  }
  if (date === 3 || date === 23) {
    return (
      <div>
        {day}, {date}rd of {month}
      </div>
    );
  } else {
    return (
      <div>
        {day}, {date}th of {month}
      </div>
    );
  }
}
