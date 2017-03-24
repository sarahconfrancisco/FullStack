import { connect } from 'react-redux';
import { fetchSearchRestaurants } from '../../actions/search_actions';
import SearchPage from './search';

const mapStateToProps = ({ currentUser, search, loading }) => {
  let userZip;
  if(currentUser.zip){
    userZip = currentUser.zip;
  } else {
    userZip = "10001";
  }
  return{
  results: search.results,
  params: search.params,
  userZip: userZip,
  latlng: search.latlng,
  loading: loading.searchLoading

}};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchRestaurants: (types, features, zip) => dispatch(fetchSearchRestaurants(types, features, zip))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
