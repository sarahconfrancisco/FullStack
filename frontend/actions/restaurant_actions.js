import * as APIUtil from '../util/restaurant_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_A_RESTAURANT = 'RECEIVE_A_RESTAURANT';

export const addRestaurant = (res, types) => dispatch => {
  return APIUtil.addRestaurant(res, types)
  .then((res) => dispatch(receiveARestaurant(res)),
  (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveARestaurant = (restaurant) => {
  return({
    type: RECEIVE_A_RESTAURANT,
    restaurant
  });
};

export const showRestaurant = (id) => dispatch => {
  return APIUtil.showRestaurant(id)
  .then((res) => dispatch(receiveARestaurant(res)),
  (err) => dispatch(receiveErrors(err.responseJSON)));
};
