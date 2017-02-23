import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchForm from './search_form';
import RestaurantIndex from './restaurant_index';
import RestaurantMap from './map';

class SearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const zip = this.props.params.zip ? this.props.params.zip : this.props.userZip
    return(<div>
      <div className="top-search">
        <SearchForm params={this.props.params} fetchSearchRestaurants={ this.props.fetchSearchRestaurants } />
      </div>

      <div className="main-search">
        <RestaurantIndex restaurants={this.props.results} />
        <RestaurantMap restaurants={this.props.results} zip={ zip } />
      </div>
    </div>);
  }
}

export default SearchPage;
