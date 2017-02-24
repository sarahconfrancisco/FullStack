import React from 'react';
import { Link } from 'react-router';

const ResHours = (props) => {
  const days = Object.keys(props.hours);
  window.hours = props.hours;
  const hours = days.map((day) => {
    return(
      <li key={day}>
        <ul className="hours">
          <li className="day" key="day">{day}</li>
          <li key="s"> {props.hours[day]["start"]} </li>
          <li key="-" className="dash">-</li>
          <li key="e"> {props.hours[day]["end"]}</li>
        </ul>
      </li>
    );
  })
  return(
    <div>
      <h3>Hours</h3>
      <ul className="all-hours">
        {hours}
      </ul>
    </div>);
}

export default ResHours;
