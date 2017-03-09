import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchForm from './search_form';
import RestaurantIndex from './restaurant_index';
import RestaurantMap from './map';
import LoadingIcon from '../loading_icon';

class SearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.params.zip && !this.props.params.types && !this.props.params.features.length){
      this.props.fetchSearchRestaurants("", [], "")
      console.log(this.props.params);
    }
  }

  render(){
    const zip = this.props.userZip
    let res_index;
    if(this.props.loading){
      res_index = <LoadingIcon />
    } else {
      res_index = <RestaurantIndex restaurants={this.props.results} />
    }
    return(<div>
      <div className="top-search">
        <SearchForm params={this.props.params} fetchSearchRestaurants={ this.props.fetchSearchRestaurants } />
      </div>

      <div className="main-search">
        {res_index}
        <RestaurantMap restaurants={this.props.results} zip={ zip } latlng={ this.props.latlng } />
      </div>
    </div>);
  }
}

export default SearchPage;
