import React from 'react';
import { Link } from 'react-router';

const ResAddress = (props) => {
  let website;
  if(props.website){
    website = <span>Website:<a>{props.website}</a></span>
  }
  return(
    <div className="address">
      <span id="street">{props.address}</span>
      <br />
      <span id="city-zip">{props.city}, {props.state} {props.zip}</span>
      <br />
      <span>Phone: {props.phone}</span>
      <br />
      {website}
    </div>
  );
};

export default ResAddress;
