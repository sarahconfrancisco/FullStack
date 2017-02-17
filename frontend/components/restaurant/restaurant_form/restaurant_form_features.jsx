const gFeatures = () => {
  return(<div className="features">
    <label key="label">What Features Does Your Restaurant Have? Check all that apply</label>
    <input type="checkbox" key="deliver" check={(this.state.delivery) ? "checked" : ""} onClick={this.addFeature('delivery').bind(this)} value="Delivers" />
    <input type="checkbox" key="pickup" check={this.state.pick_up ? "checked" : ""} onClick={this.addFeature('pick_up').bind(this)} value="Order and Pick Up" />
    <input type="checkbox" key="reservations" check={this.state.reservations ? "checked" : ""} onClick={this.addFeature('reservations').bind(this)} value="Accepts Reservations" />
    <input type="checkbox" key="parking" check={this.state.parking ? "checked" : ""} onClick={this.addFeature('parking').bind(this)} value="Parking" />
    <input type="checkbox" key="outdoor" check={this.state.outdoor ? "checked" : ""} onClick={this.addFeature('outdoor').bind(this)} value="Outdoor Seating" />
    <input type="checkbox" key="credit" check={this.state.credit ? "checked" : ""} onClick={this.addFeature('credit').bind(this)} value="Accepts Credit Cards" />
    <input type="checkbox" key="bar" check={this.state.bar ? "checked" : ""} onClick={this.addFeature('bar').bind(this)} value="Serves Alcohol" />
    <input type="checkbox" key="byob" check={this.state.byob ? "checked" : ""} onClick={this.addFeature('byob').bind(this)} value="BYOB" />
  </div>);
};

const gPrice = () => {
  return(<form className="prices" onChange={this.update('price').bind(this)}>
    <input type="radio" key="$" name="price" value={1}>$</input>
    <input type="radio" key="$$" name="price" value={2}>$$</input>
    <input type="radio" key="$$$" name="price" value={3}>$$$</input>
    <input type="radio" key="$$$$" name="price" value={4}>$$$$</input>
  </form>);
};
