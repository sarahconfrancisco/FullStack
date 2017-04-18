import { connect } from 'react-redux';
import ImageForm from './new_image_form';
import { addImage} from '../../actions/image_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.currentUser,
    });
  };

const mapDispatchToProps = (dispatch) => ({
    addImage: (image) => dispatch(addImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);
