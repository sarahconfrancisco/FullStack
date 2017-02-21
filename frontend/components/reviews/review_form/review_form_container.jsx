import { connect } from 'react-redux';
import { editReview, addReview, getReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state) => {
  return({
    currentUser: state.currentUser,
    reviews: state.reviewIndex
    });
  };

const mapDispatchToProps = (dispatch) => ({
  editReview: (review) => dispatch(editReview(review)),
  addReview: (review, res_id) => dispatch(addReview(review, res_id)),
  getReview: (user_id, restaurant_id) => dispatch(getReview(user_id, restaurant_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
