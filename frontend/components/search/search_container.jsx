import { connect } from 'react-redux';
import { fetchSearchRestaurants } from '../../actions/search_actions';
import SearchPage from './search';

const mapStateToProps = (state) => {
  let userZip;
  if(state.currentUser.zip){
    userZip = state.currentUser.zip;
  } else {
    userZip = "10001";
  }
  return{
  results: state.search.results,
  params: state.search.params,
  userZip: userZip,
  latlng: state.search.latlng,
  loading: state.loading.searchLoading

}};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchRestaurants: (types, features, zip) => dispatch(fetchSearchRestaurants(types, features, zip))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
