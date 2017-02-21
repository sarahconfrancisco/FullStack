import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import { indexReviews } from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean((state.currentUser && state.currentUser.id)),
    reviews: state.reviewIndex
    });
};

const mapDispatchToProps = (dispatch) => {
  return({indexReviews: (id) => dispatch(indexReviews(id))});
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
