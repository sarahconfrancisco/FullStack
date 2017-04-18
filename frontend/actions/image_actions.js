import * as APIUtil from '../util/image_api_util';
import { receiveErrors } from './error_actions';
import { receiveARestaurant } from './restaurant_actions';

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const LOADING_IMAGES = "LOADING_IMAGES";


export const addImage = (image) => dispatch => {
  return APIUtil.addImage(image)
    .then((restaurant) => dispatch(receiveARestaurant(restaurant)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const getIndexImages = (restaurant_id) => dispatch => {
    dispatch(loadImages());
    return APIUtil.getIndexImages(restaurant_id)
    .then((images) => {
        return dispatch(receiveImages(images))
    },
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveImages = (images) => {
  return({
    type: RECEIVE_IMAGES,
    images: images.images
  });
};

export const loadImages = () => ({
  type: LOADING_IMAGES
});
