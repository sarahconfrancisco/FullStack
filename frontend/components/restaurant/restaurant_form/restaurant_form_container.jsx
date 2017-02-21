import { connect } from 'react-redux';
import { addRestaurant } from '../../../actions/restaurant_actions';
import RestaurantForm from './restaurant_form';

const mapStateToProps = (state) => {
  return({
    restaurant: state.restaurant
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    addRestaurant: (res, types) => dispatch(addRestaurant(res, types))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);
