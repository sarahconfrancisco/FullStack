import React from 'react';
import ResHeader from './res_header';
import ResAddress from './res_address';
import ResHours from './res_hours';
import ResFeature from './res_features';
import ReviewIndexContainer from '../../reviews/review_index/review_index_container';
import  { Link, withRouter } from 'react-router';
import LoadingIcon from '../../loading_icon';

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.showRestaurant(this.props.params.restaurantId);
  }

  render(){
    if(this.props.loading || !this.props.restaurant.name){
      return(<LoadingIcon />);
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
              rating={this.props.restaurant.rating}
              numReviews={this.props.restaurant.num_reviews}
               />
          </div>
          <div className="map-photos">
            <div className="map-address">
              <div id="map">
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.restaurant.zip}&size=285x135
                  &markers=color:red%7Clabel:C%7C${this.props.restaurant.latitude.toString()},${this.props.restaurant.longitude.toString()}
                  &key=AIzaSyCeNvQ8uvwW-dHA9Xo4CHXiUF9hTWLBXVU`} />
              </div>
              <ResAddress
                address={this.props.restaurant.address}
                phone={this.props.restaurant.phone}
                website={this.props.restaurant.website}
                city={this.props.restaurant.city}
                state={this.props.restaurant.city}
                zip={this.props.restaurant.zip} />
            </div>
            <ul className="res-photos">
              <li><div className="photo-container"><img src={this.props.restaurant.image_1_url}/></div></li>
              <li><div className="photo-container"><img src={this.props.restaurant.image_2_url}/></div></li>
              <li><div className="photo-container"><img src={this.props.restaurant.image_3_url}/></div></li>
            </ul>
            <Link to={`/imageindex/${this.props.restaurant.id}`}>User Photos</Link>
          </div>
        </div>
        <div className="midcontent">
          <div className="main-shelf">
            <ReviewIndexContainer resId={this.props.restaurant.id} />
          </div>
          <div className="side-shelf">
            <ResHours hours={this.props.restaurant.hours} />
            <ResFeature features={this.props.restaurant.features} />
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
