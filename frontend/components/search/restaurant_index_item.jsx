import React from 'react';
import { Link } from 'react-router';
import Star from '../star';

const RestaurantIndexItem = ({ restaurant }) => {
  const stars = [1,2,3,4,5].map((idx) => <Star
                                        rating={restaurant.rating}
                                        key={idx} index={idx}
                                        name='smallest-star' />)
  const price = "$".repeat(parseInt(restaurant.price));
  const typeArray = restaurant.types.join(", ").split(" ");
  const types = typeArray.map((type) => <a key={type}>{type} </a>);

  return(
    <div className="restaurant-index-item">

      <div className="avatar-container">
        <img src={restaurant.image_1_url}/>
      </div>

      <div className="left-index-item">
        <Link to={`/restaurant/${restaurant.id}`}>
          {restaurant.name}
        </Link>
        <div className="res-rating">
          <ul className="index-stars">
            {stars}
          </ul>
          <span>
            {restaurant.num_reviews} reviews
          </span>
        </div>
        <div className="type-price">
          <span>
            {price}
            <p className="bullet">•</p>
            {types}
          </span>
        </div>
      </div>

      <div className="right-index-item">
        <span>
          {restaurant.address}
        </span>
        <span>
          {restaurant.city},
          {restaurant.state}
          {restaurant.zip}
        </span>
        <span>
          {restaurant.phone}
        </span>
      </div>
    </div>
  );
}

export default RestaurantIndexItem;
