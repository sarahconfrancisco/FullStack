import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import { addReview } from './util/review_api_util';
import { showRestaurant } from './util/restaurant_api_util';
import { fetchSearchRestaurants } from './util/search_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState
  if (window.currentUser){
    preloadedState = {currentUser: window.currentUser};
  }
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
