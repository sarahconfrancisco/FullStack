import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

const RestaurantIndex = (props) => {
  let indexItems = [];
  for(let key in props.restaurants){
    if(props.restaurants[key].rating === 4){
      indexItems.push(
        <li key={key}>
          <RestaurantIndexItem restaurant={props.restaurants[key]} />
        </li>);
      }
  }
  for(let key in props.restaurants){
    if(props.restaurants[key].rating === 3){
      indexItems.push(
        <li key={key}>
          <RestaurantIndexItem restaurant={props.restaurants[key]} />
        </li>);
      }
  }

  for(let key in props.restaurants){
    if(props.restaurants[key].rating === 2){
      indexItems.push(
        <li key={key}>
          <RestaurantIndexItem restaurant={props.restaurants[key]} />
        </li>);
      }
  }

  for(let key in props.restaurants){
    if(props.restaurants[key].rating === 1){
      indexItems.push(
        <li key={key}>
          <RestaurantIndexItem restaurant={props.restaurants[key]} />
        </li>);
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
