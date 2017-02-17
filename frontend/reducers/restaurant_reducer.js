import { RECEIVE_A_RESTAURANT } from '../actions/restaurant_actions';
import { merge } from 'lodash';

const defaultState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  website: "",
  hours: "",
  types: ""
};

const restaurantReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_A_RESTAURANT:
      return action.restaurant;
    default:
      return oldState;
  }
};

export default restaurantReducer;
