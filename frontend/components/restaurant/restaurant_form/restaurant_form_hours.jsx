import React from 'react';

const RestaurantFormHours = () => {
  return(
    <ul>
      <li key="day">
        {gDaysOptions()}
      </li>
      <li key="start">
        {gHoursOptions("Start")}
      </li>
      <li key="end">
        {gHoursOptions("End")}
      </li>
    </ul>
  );
}

const gHoursOptions = (start_or_end) => {
  let hours = [];
  for(let i = 1; i < 12; i++){
    let select = <select key={i} value={i.toString() + "am"}>{i} am</select>
    hours.push(select);
    }
    hours.push(<select key={12} value="12pm">12 am</select>);
  for(let i = 1; i < 12; i++){
    let select = <select key={i + 12} value={i.toString() + "pm"}>{i} pm</select>
    hours.push(select);
    }
    hours.push(<select key={0} value="12am">12 am</select>)
    return(
      <option>
        <select value="" disabled key={start_or_end}>{start_or_end}</select>
        {hours}
      </option>

    );
};

const gDaysOptions = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daySelects = days.map((day) => <select value={day} key={day}>{day}</select>);
  return(
    <option>
      {daySelects}
    </option>
  );
}
