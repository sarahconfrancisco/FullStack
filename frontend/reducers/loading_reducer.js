import { LOADING_A_RESTAURANT, RECEIVE_A_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_RESULTS, LOADING_SEARCH } from '../actions/search_actions';

const initialState = { searchLoading: false, restaurantLoading: false };

const LoadingReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case RECEIVE_A_RESTAURANT:
    case RECEIVE_RESULTS:
      return initialState;
    case LOADING_A_RESTAURANT:
      return Object.assign({}, state, { restaurantLoading: true });
    case LOADING_SEARCH:
      return Object.assign({}, state, { searchLoading: true });
    default:
      return state;

  }
};

export default LoadingReducer;
