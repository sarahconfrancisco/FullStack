import * as APIUtil from '../util/restaurant_api_util';
import { receiveErrors } from './error_actions';

export const LOADING_A_RESTAURANT = "LOADING_A_RESTAURANT";
export const RECEIVE_A_RESTAURANT = 'RECEIVE_A_RESTAURANT';

export const addRestaurant = (res, types) => dispatch => {
  return APIUtil.addRestaurant(res, types)
    .then((res) => {
      return dispatch(receiveARestaurant(res))},
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveARestaurant = (restaurant) => {
  return({
    type: RECEIVE_A_RESTAURANT,
    restaurant
  });
};

export const showRestaurant = (id) => dispatch => {
  dispatch(loadRestaurant());
  return APIUtil.showRestaurant(id)
    .then((res) => {
      return dispatch(receiveARestaurant(res));
    },
    (err) => {
      return dispatch(receiveErrors(err.responseJSON))});
};

export const loadRestaurant = () => ({
  type: LOADING_A_RESTAURANT
});
