import { connect } from 'react-redux';
import Error from './errors';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return({
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
