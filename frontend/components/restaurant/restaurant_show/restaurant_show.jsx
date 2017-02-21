import React from 'react';
import ResHeader from './res_header';
import ResAddress from './res_address';
import ResHours from './res_hours';
import ResFeature from './res_features';
import ReviewIndexContainer from '../../reviews/review_index/review_index_container';
import  { Link, withRouter } from 'react-router';

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.showRestaurant(this.props.params.restaurantId);
  }

  render(){
    if(!this.props.restaurant.name){
      return(<div></div>);
    }
    return(
      <div className="res-show">
        <div className="top-third">

        <div className="top-shelf">
          <ResHeader
            router={this.props.router}
            id={this.props.restaurant.id}
            name={this.props.restaurant.name}
            price={this.props.restaurant.price}
            types={this.props.restaurant.types}
            rating={this.props.rating} />
        </div>
        <div className="map-photos">
          <div className="map-address">
            <div id="map">Map</div>
            <ResAddress
              address={this.props.restaurant.address}
              phone={this.props.restaurant.phone}
              website={this.props.restaurant.website}
              city={this.props.restaurant.city}
              state={this.props.restaurant.city}
              zip={this.props.restaurant.zip} />
          </div>
          <ul className="res-photos">
            <li><div>Photo</div></li>
            <li><div>Photo</div></li>
            <li><div>Photo</div></li>
          </ul>
        </div>
        <div className="midcontent">
          <div className="main-shelf">
            <h3>Reviews</h3>
            <ReviewIndexContainer resId={this.props.restaurant.id} />
          </div>
          <div className="side-shelf">
            <ResHours hours={this.props.restaurant.hours} />
            <ResFeature features={this.props.restaurant.features} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
