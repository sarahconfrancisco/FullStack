import * as APIUtil from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const fetchSearchRestaurants = (types, features) => dispatch => {
  return APIUtil.fetchSearchRestaurants(types, features)
    .then((results) => {
      return dispatch(receiveResults(results))},
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveResults = (searchResults) => {
  return({
    type: RECEIVE_RESULTS,
    searchResults
  });
};
