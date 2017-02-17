import React from 'react';
import { Link } from 'react-router';

const ResAddress = (props) => {
  let website;
  if(props.website){
    website = <span>Website:<a>{props.website}</a></span>
  }
  return(
    <div>
      <span>{props.address}</span>
      <span>{props.city}, {props.state} {props.zip}</span>
      <span>Phone: {props.phone}</span>
      {website}
    </div>
  );
};

export default ResAddress;
