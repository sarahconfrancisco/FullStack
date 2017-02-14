import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SessionFormContainer from './session/session_form_container';

const Root = (props) => {

  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} />
          <Route path="/signup" component={SessionFormContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
