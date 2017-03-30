import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
const SessionReducer = (oldState = {}, action) => {
	debugger
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return oldState;
  }
}

export default SessionReducer;
