import { connect } from 'react-redux';
import { editReview, addReview, getReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';
import { showRestaurant } from '../../../actions/restaurant_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.currentUser,
    reviews: state.reviewIndex,
    restaurant: state.restaurant
    });
  };

const mapDispatchToProps = (dispatch) => ({
  editReview: (review) => dispatch(editReview(review)),
  addReview: (review, res_id) => dispatch(addReview(review, res_id)),
  getReview: (user_id, restaurant_id) => dispatch(getReview(user_id, restaurant_id)),
  showRestaurant: (id) => dispatch(showRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
