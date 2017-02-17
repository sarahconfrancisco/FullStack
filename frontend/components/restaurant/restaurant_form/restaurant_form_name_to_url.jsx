import React from 'react';

const RestaurantFormNameToUrl = (props) => {
  return(
    <div>
      <input key="1" placeholder="Name of Restaurant" onChange={this.update('name').bind(this)} className="full-input" value={this.state.name} />
      <input key="2" className="full-input" placeholder="address" onChange={this.update('address').bind(this)} value={this.state.address} />
      <div className="city-state-zip">
        <input key="1"id="city" placeholder="City" value={this.state.city} onChange={this.update('city')} />
        <input key="2"id="state" placeholder="State" value={this.state.state} onChange={this.update('state')} />
        <input key="3"id="zip" placeholder="ZIP" value={this.state.zip} onChange={this.update('zip')} />
      </div>
      <input key="phone" className="full-input" placeholder="Phone" onChange={this.update('phone')} value={this.state.phone} />
      <input key="website" className="full-input" placeholder="Website (optional)" onChange={this.update('website')} value={this.state.website} />
    </div>
  );
};

export default RestaurantFormNameToUrl;
