import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchForm from './search_form';
import RestaurantIndex from './restaurant_index';

class SearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(<div>
      <SearchForm params={this.props.params} fetchSearchRestaurants={ this.props.fetchSearchRestaurants } />
      <RestaurantIndex restaurants={this.props.results} />
    </div>);
  }
}

export default SearchPage;
