class MarkerManager {
  constructor(aMap){
    this.map = aMap;
    this.markers = [];
  }

  _markerExists(restaurant){
    this.markers.forEach((marker) => {
      if(marker.position.lat() === restaurant.latitude && marker.position.lng() === restaurant.longitude){
        return true;
      }
    });
    return false;
  }

  _restaurantInState(marker){
    for(var id in this.restaurants ){
      if(marker.position.lat() === this.restaurants[id].latitude && marker.position.lng() === this.restaurants[id].longitude){
        return true;
      }
    }
    return false;
  }

  _markersToRemove(){
    let toRemove = [];
    this.markers.forEach((marker) => {
      if(!this._restaurantInState(marker)){
        toRemove.push(marker);
      }
    });
    return toRemove;
  }

  _removeMarker(marker){
    this.markers.splice(this.markers.indexOf(marker), 1);
    marker.setMap(null);
  }

  _restaurantsToAdd(){
    let restaurants = [];
    for(var id in this.restaurants ){
      if (!this._markerExists(this.restaurants[id])){
        restaurants.push(this.restaurants[id]);
      }
    }
    return restaurants;
  }

  _createMarkerFromRestaurant(restaurant){
    const newMarker = new google.maps.Marker({
    position: {lat: restaurant.latitude, lng: restaurant.longitude},
    map: this.map,
    title: restaurant.name});
    this.markers.push(newMarker);
  }

  updateMarkers(restaurants) {
    this.restaurants = restaurants;
    this._markersToRemove().forEach((marker) => this._removeMarker(marker));
    this._restaurantsToAdd().forEach((restaurant) => this._createMarkerFromRestaurant(restaurant));
  }
}

export default MarkerManager;
