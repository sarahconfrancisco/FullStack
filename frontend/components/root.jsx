import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './app';

import SessionFormContainer from './session/session_form_container';
import RestaurantFormContainer from './restaurant/restaurant_form/restaurant_form_container';
import RestaurantShowContainer from './restaurant/restaurant_show/restaurant_show_container';
import ReviewFormContainer from './reviews/review_form/review_form_container';

const Root = (props) => {

  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} />
          <Route path="/signup" component={SessionFormContainer} />
          <Route path="/addrestaurant" component={RestaurantFormContainer} />
          <Route path="/restaurant/:restaurantId" component={RestaurantShowContainer}>
          </Route>
          <Route path="/newreview/:restaurantId" component={ReviewFormContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
