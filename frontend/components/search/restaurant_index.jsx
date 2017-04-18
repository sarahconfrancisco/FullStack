import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

const RestaurantIndex = ({ loading, restaurants }) => {
  let indexItems = [];
  for(let i = 5; i > 0; i--){
    for(let key in restaurants){
      if(restaurants[key].rating === i){
        indexItems.push(
          <li key={key}>
            <RestaurantIndexItem loading={loading} restaurant={restaurants[key]} />
          </li>
        );
      }
    }
  }
  return(
    <div className="restaurant-index">
      <ul>
        {indexItems}
      </ul>
    </div>
  );
};

export default RestaurantIndex;
