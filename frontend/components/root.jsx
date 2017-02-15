import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import SessionFormContainer from './session/session_form_container';


const Root = (props) => {

  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={SessionFormContainer}>
          <Route path="/login" component={SessionFormContainer} />
          <Route path="/signup" component={SessionFormContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
