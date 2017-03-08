import * as APIUtil from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const LOADING_SEARCH = "LOADING_SEARCH";

export const fetchSearchRestaurants = (types, features, zip) => dispatch => {
  dispatch(loadSearch());
  return APIUtil.fetchSearchRestaurants(types, features, zip)
    .then((results) => {
      return dispatch(receiveResults(results))},
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const loadSearch = () => ({
  type: LOADING_SEARCH
});

export const receiveResults = (searchResults) => {
  return({
    type: RECEIVE_RESULTS,
    searchResults
  });
};
