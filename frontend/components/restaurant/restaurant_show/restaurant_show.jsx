import React from 'react';
import ResHeader from './res_header';
import ResAddress from './res_address';
import ResHours from './res_hours';
import ResFeature from './res_features';

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
      this.props.showRestaurant(parseInt(this.props.params.id));
  }

  render(){
    if(!this.props.restaurant.name){
      return(<div></div>);
    }
    return(
      <div className="res-show">
        <div className="top-shelf">
          <ResHeader
            name={this.props.restaurant.name}
            price={this.props.restaurant.price}
            types={this.props.restaurant.types} />
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
        </div>
        <div className="side-shelf">
          <ResHours hours={this.props.restaurant.hours} />
          <ResFeature features={this.props.restaurant.features} />
        </div>
      </div>
    );
  }
}

export default RestaurantShow;
