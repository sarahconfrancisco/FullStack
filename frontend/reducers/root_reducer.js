import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import RestaurantReducer from './restaurant_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorReducer,
  restaurant: RestaurantReducer
});

export default RootReducer;
