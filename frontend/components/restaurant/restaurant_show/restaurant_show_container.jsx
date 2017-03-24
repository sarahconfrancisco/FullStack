import { connect } from 'react-redux';
import { showRestaurant } from '../../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state) => {
  return({
    restaurant: state.restaurant,
    errors: state.errors,
    loading: state.loading.restaurantLoading
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    showRestaurant: (id) => dispatch(showRestaurant(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
