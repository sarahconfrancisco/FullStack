import React from 'react';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class RestaurantMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(nextProps){
    this.map = new google.maps.Map(this.mapNode, {
      center: {"lat": 40.7127837,
              "lng": -74.0059413},
      zoom: 12
    });
    this.geocoder = new google.maps.Geocoder();
    this.MarkerManager = new MarkerManager(this.map);
    this.codeAddress(nextProps.zip,
                     this.map,
                     this.MarkerManager,
                     this.geocoder,
                     nextProps.restaurants,
                     nextProps.latlng);
  }

  codeAddress(address, map, MarkerManager, geocoder, restaurants, latlng) {
    if(latlng && latlng.lat){
      map.setCenter(new google.maps.LatLng(latlng.lat, latlng.lng));
      MarkerManager.updateMarkers(restaurants);
    } else {
      geocoder.geocode( { 'address': address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let lat = results[0].geometry.location.lat();
          let lng = results[0].geometry.location.lng();
          map.setCenter(new google.maps.LatLng(lat, lng));
          MarkerManager.updateMarkers(restaurants);
        }
      });
    }
  }

  render(){
    return(<div id='map-container' ref={ map => this.mapNode = map }></div>);
  }
}

export default RestaurantMap;
