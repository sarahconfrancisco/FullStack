import React from 'react';
import { Link, withRouter } from 'react-router';
import RestaurantFormHours from './restaurant_form_hours';
import RestaurantFormFeatures from './restaurant_form_features';
import RestaurantFormNameToUrl from './restaurant_form_name_to_url';


class RestaurantForm extends React.Component{

  constructor(props){
    super(props)
    this.state = this.props.restaurant;
  }



  handleSubmit(){
    return ((e) => {
      e.preventDefault();
      this.props.addRestaurant(this.state, this.state.types);
    })
  }

  update(field){
    return (e) => {this.setState({[field]: e.currentTarget.value})};
  }

  addFeature(feature){
    return () => this.setState({[feature]: !this.state[feature]})
  }


  render(){
    return(
      <div>
        <h2>Add Your Restaurant</h2>
        <RestaurantFormNameToUrl update={this.update.bind(this)} info={this.state} />
        <RestaurantFormHours update={this.update.bind(this)} hours={this.state.hours} />
        <RestaurantFormFeatures update={this.update.bind(this)} addFeature={this.addFeature.bind(this)} features={this.state} price={this.state.price} />
        <input type="submit" value={this.state.types} onChange={this.update('types')} placeholder="e.g. Mexican, Tex-Mex, Tacos" />
        <input type="submit" value="Add Restaurant" onClick={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default RestaurantForm;
