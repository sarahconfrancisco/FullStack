import { RECEIVE_REVIEWS } from '../actions/review_actions';
import { merge } from 'lodash';



const reviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return oldState;
  }
};

export default reviewReducer;
