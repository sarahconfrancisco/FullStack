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
      const location = this.state.location;
      const types = this.state.types;
      const features = this.state.features;
      this.props.fetchSearchRestaurants(types, features, location);
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
    const checked = this.state.features.includes(value) ? "checked" : ""
    return(
      <li key={value}>
        <input type="checkbox" checked={ checked } value={value} />
        <label>{label}</label>
      </li>
    );
  }

  render(){
    if(!this.state.features){
      return(<div></div>);
    }
    const values1 = ["delivery", "pick_up", "reservations", "parking"];
    const labels1 = ["Delivers", "Take Out", "Accepts Reservations", "Has Parking"];
    const values2 = ["outdoor", "credit", "bar", "byob" ];
    const labels2 = ["Has Outdoor Seating", "Accepts Credit Card", "Serves Alcohol", "BYOB"];
    const checkBoxes1 = values1.map((val, index) => this.makeCheckBox(labels1[index], val));
    const checkBoxes2 = values2.map((val, index) => this.makeCheckBox(labels2[index], val));
    return(
      <div className="search-form">
        <div className="search-bar" >
          <span>Find</span>
          <input
            value={this.state.types}
            placeholder="breakfast, coffee"
            onChange={this.update('types').bind(this)}
          />
          <span>Near</span>
          <input
            type="text"
            value={this.state.location}
            placeholder="NY"
            onChange={this.update('location').bind(this)}
            />
          <button onClick={this.handleSubmit().bind(this)} className="search-button">
            <img src={window.images.magnifying_glass_icon} />
          </button>
        </div>
        <div onClick={this.addFeature().bind(this)} className="features-search">
          <ul>
            <li>
              <ul className="checkbox-ul">
                {checkBoxes1}
              </ul>
            </li>
            <li>
              <ul className="checkbox-ul">
                {checkBoxes2}
              </ul>
            </li>
          </ul>
        </div>
      </div>);
  }
}


export default SearchForm;
