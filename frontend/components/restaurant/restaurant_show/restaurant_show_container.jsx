import { connect } from 'react-redux';
import { showRestaurant } from '../../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, { location }) => {
  return({
    restaurant: state.restaurant,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    showRestaurant: (id) => dispatch(showRestaurant(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
