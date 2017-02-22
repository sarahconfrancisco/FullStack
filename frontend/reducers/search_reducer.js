import { merge } from 'lodash';
import { RECEIVE_RESULTS } from '../actions/search_actions';

const defaultState = {
  results: {},
  params: {types: "", features: []}
}

const SearchReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_RESULTS:
      return action.searchResults;
    default:
      return oldState;
  }
};


export default SearchReducer;
