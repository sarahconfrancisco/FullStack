import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => {
    return dispatch(receiveErrors(err.responseJSON))});
};
export const login = (user) => dispatch => {
  return APIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)));
};
export const logout = (user) => dispatch => {
  return APIUtil.logout(user).then(() => dispatch(receiveCurrentUser(null)), (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveCurrentUser = (currentUser) => (
  {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
);
