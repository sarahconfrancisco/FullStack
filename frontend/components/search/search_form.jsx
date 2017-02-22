import React from 'react';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.params
  }

  update(field){
    return ((e) => this.setState({[field]: e.target.value}));
  }

  handleSubmit(){
    return((e) => {
      e.preventDefault();
      const types = this.state.types;
      const features = this.state.features;
      this.props.fetchSearchRestaurants(types, features);
    });
  }

  addFeature(){
    return((e) => {
      const feat = e.target.value;
      if(feat){
        let features;
        if(this.state.features.includes(feat)){
           features = this.state.features.filter((el) => el != feat);
          } else {
           features = this.state.features.concat(feat);
          }
        this.setState({features: features});
        }
    });
  }

  makeCheckBox(label, value){
    return(
      <l key={value}>
        <label>{label}</label>
        <input type="checkbox" check={this.state.features.includes(value)} value={value} />
      </l>
    );
  }

  render(){
    if(!this.state.features){
      return(<div></div>);
    }
    const values = ["delivery", "pick_up", "reservations", "parking", "outdoor", "credit", "bar", "byob" ];
    const labels = ["Delivers", "Take Out", "Accepts Reservations", "Has Parking", "Has Outdoor Seating", "Accepts Credit Card", "Serves Alcohol", "BYOB"];
    const checkBoxes = values.map((val, index) => this.makeCheckBox(labels[index], val));
    return(
      <div className="search-form">
        <div className="search-bar" >
          <span>Find</span>
          <input value={this.state.types} onChange={this.update('types').bind(this)} />
          <button onClick={this.handleSubmit().bind(this)} className="search-button">
            <img src={window.images.magnifying_glass_icon} />
          </button>
        </div>
        <div onClick={this.addFeature().bind(this)} className="features-search">
          <ul>
            {checkBoxes}
          </ul>
        </div>
      </div>);
  }
}


export default SearchForm;
