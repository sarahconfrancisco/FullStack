import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => ({
  loggedIn: Boolean((state.currentUser && state.currentUser.id)),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = (location.pathname.slice(1) == 'login') ? "Log In" : "Sign Up";
  const processForm = (formType === 'Log In') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
