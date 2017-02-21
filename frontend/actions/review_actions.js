import * as APIUtil from '../util/review_api_util';
import { receiveErrors } from './error_actions';
import { receiveARestaurant } from './restaurant_actions';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const indexReviews = (id) => dispatch => {
  return APIUtil.indexReviews(id)
    .then((reviews) => dispatch(receiveReviews(reviews)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveReviews = (reviews) => {
  return({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const addReview = (review, res_id) => dispatch => {
  return APIUtil.addReview(review, res_id)
    .then((restaurant) => dispatch(receiveARestaurant(restaurant)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const editReview = (review) => dispatch => {
  return APIUtil.editReview(review)
    .then((restaurant) => dispatch(receiveARestaurant(restaurant)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const getReview = (user_id, restaurant_id) => dispatch => {

  return APIUtil.getReview(user_id, restaurant_id)
    .then((review) => dispatch(receiveReviews(review)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};
