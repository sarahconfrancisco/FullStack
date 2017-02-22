import React from 'react';

const makeTinyStars = (rating) => {
  return(
    <ul className="index-stars">
      <li>
        <button value={1} className={ ((rating >= 1 ) ? "highlight " : "" ) + "smallest-star"} >
          <img src={window.images.star_icon} className="star-icon-smaller" />
        </button>
      </li>

      <li>
        <button value={2} className={ ((rating >= 2 ) ? "highlight " : "" ) + "smallest-star"} >
          <img src={window.images.star_icon} className="star-icon-smaller" />
        </button>
      </li>

      <li>
        <button value={3} className={ ((rating >= 3 ) ? "highlight " : "" ) + "smallest-star"} >
          <img src={window.images.star_icon} className="star-icon-smaller" />
        </button>
      </li>

      <li>
        <button value={4} className={ ((rating >= 4 ) ? "highlight " : "" ) + "smallest-star"} >
          <img src={window.images.star_icon} className="star-icon-smaller" />
        </button>
      </li>

      <li>
        <button value={5} className={ ((rating >= 5 ) ? "highlight " : "" ) + "smallest-star"} >
          <img src={window.images.star_icon} className="star-icon" />
        </button>
      </li>

    </ul>
  );
}


const RestaurantIndexItem = (props) => {
  const tinyStars = makeTinyStars(props.restaurant.rating);
  const price = "$".repeat(parseInt(props.restaurant.price));
  return(
    <div className="restaurant-index-item">
      <div className="left-index-item">
        <span>{props.restaurant.name}</span>
        {tinyStars}
        <span>{props.restaurant.num_revews} reviews</span>
        <span>{price} {props.restaurant.types.join(", ")}</span>
      </div>
      <div className="right-index-item">
        <span>{props.restaurant.address}</span>
        <span>{props.restaurant.city}, {props.restaurant.state} {props.restaurant.zip}</span>
        <span>{props.restaurant.phone}</span>
      </div>
    </div>
  );
}

export default RestaurantIndexItem;
