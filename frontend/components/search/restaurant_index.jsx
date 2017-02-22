import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

const RestaurantIndex = (props) => {
  let indexItems = [];
  for(let key in props.restaurants){
    indexItems.push(
      <li key={key}>
        <RestaurantIndexItem restaurant={props.restaurants[key]} />
      </li>);
  }

  return(
    <div>
      <ul>
        {indexItems}
      </ul>
    </div>
  );
};

export default RestaurantIndex;
