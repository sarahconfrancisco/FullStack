import React from 'react';
import { Link } from 'react-router';

const ResAddress = (props) => {
  let website;
  if(props.website){
    website = <span>
                Website:<a>{props.website}</a>
              </span>
  }
  return(
    <div className="address">

      <div className="street">
        <img className="icon" src={window.images.marker_icon} />
        <span>{props.address}</span>
      </div>

      <span id="city-zip">
        {props.city}, {props.state} {props.zip}
      </span>

      <div className="directions">
        <img className="icon" src={window.images.arrow_icon} />
        <a>Get Directions</a>
      </div>

      <div className="phone">
        <img className="icon" src={window.images.phone_icon} />
        <span>
          Phone: {props.phone}
        </span>
      </div>

      <br />
      {website}

    </div>
  );
};

export default ResAddress;
