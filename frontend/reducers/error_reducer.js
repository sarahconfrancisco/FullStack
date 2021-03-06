import { RECEIVE_ERRORS } from '../actions/error_actions';


const ErrorReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
}

export default ErrorReducer;
