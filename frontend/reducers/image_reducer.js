import { RECEIVE_IMAGES } from '../actions/image_actions';
import { merge } from 'lodash';

const ImageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case "RECEIVE_IMAGES":
      return action.images || {};
    default:
      return oldState;
  }
};

export default ImageReducer;
