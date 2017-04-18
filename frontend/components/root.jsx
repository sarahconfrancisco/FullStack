import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './app';

import SessionFormContainer from './session/session_form_container';
import RestaurantFormContainer from './restaurant/restaurant_form/restaurant_form_container';
import RestaurantShowContainer from './restaurant/restaurant_show/restaurant_show_container';
import ReviewFormContainer from './reviews/review_form/review_form_container';
import SearchContainer from './search/search_container';
import ImageFormContainer from './image/new_image_container';
import ImageIndexContainer from './image/image_index_container';

const Root = (props) => {

  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} />
          <Route path="/login" component={SessionFormContainer} />
          <Route path="/signup" component={SessionFormContainer} />
          <Route path="/addrestaurant" component={RestaurantFormContainer} />
          <Route path="/restaurant/:restaurantId" component={RestaurantShowContainer} />
          <Route path="/newreview/:restaurantId" component={ReviewFormContainer} />
          <Route path="/newimage/:restaurantId" component={ImageFormContainer} />
          <Route path="/imageindex/:restaurantId" component={ImageIndexContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
