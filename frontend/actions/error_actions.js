export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors) => {
  return {
  type: RECEIVE_ERRORS,
  errors
}};

export const clearErrors = () => {
  return {
    type: RECEIVE_ERRORS,
    errors: null
  }
};
