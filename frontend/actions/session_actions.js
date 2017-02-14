import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then((user) => receiveCurrentUser(user));
};
export const login = (user) => dispatch => {
  return APIUtil.login(user).then((user) => receiveCurrentUser(user));
};
export const logout = (user) => dispatch => {
  return APIUtil.logout(user).then(() => receiveCurrentUser(null));
};

export const receiveCurrentUser = (currentUser) => (
  {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
);
