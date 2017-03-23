import React from 'react';

const Star = ({ rating, index, name }) => {
  return(
    <li>
      <button value={index} className={ ((rating >= index ) ? "highlight " : "" ) + name }>
        <img src={window.images.star_icon} className="star-icon-smaller" />
      </button>
    </li>
  );
}

export default Star
