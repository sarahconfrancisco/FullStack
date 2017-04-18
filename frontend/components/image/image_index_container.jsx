import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { getIndexImages } from '../../actions/image_actions';
import { showRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.currentUser,
    images: state.images,
    loading: state.loading.imageLoading || state.loading.restaurantLoading || state.loading.searchLoading,
    restaurant: state.restaurant
    });
  };

const mapDispatchToProps = (dispatch) => ({
    getIndexImages: (restaurant_id) => dispatch(getIndexImages(restaurant_id)),
    showRestaurant: (restaurant_id) => dispatch(showRestaurant(restaurant_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex);
