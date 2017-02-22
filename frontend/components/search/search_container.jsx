import { connect } from 'react-redux';
import { fetchSearchRestaurants } from '../../actions/search_actions';
import SearchPage from './search';

const mapStateToProps = (state) => {
  return{
  results: state.search.results,
  params: state.search.params
}};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchRestaurants: (types, features) => dispatch(fetchSearchRestaurants(types, features))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
