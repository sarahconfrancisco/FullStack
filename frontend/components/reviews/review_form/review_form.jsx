import React from 'react';
import { Link, withRouter } from 'react-router';

class ReviewForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: "",
      date: "",
      rating: null,
      user: {}
    };
  }

  componentDidMount(){
    if(this.props.currentUser.id){
      this.props.getReview(this.props.currentUser.id, this.props.params.restaurantId);
    }
    else {
      this.props.router.push("/login");
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.reviews)
  }

  handleSubmit(){
    return((e) => {
      e.preventDefault();
      let review = {
        body: this.state.body,
        rating: this.state.rating,
      }
      if (this.state.user.id){
        review.id = parseInt(this.state.id);
        this.props.editReview(review)
      } else {
        this.props.addReview(review, this.props.params.restaurantId )
      }
      this.props.router.push(`restaurant/${this.props.params.restaurantId}`)
    });
  }

  update(field){
    return((e) => {
      this.setState({[field]: e.target.value});
    });
  }

  updateRating(rating){
    return((e) => {

      this.setState({rating: parseInt(rating)});
    });
  }
  hightlight(value){
    if(value >= parseInt(this.state.rating)){
      return "hightlight ";
    } else {
      return "";
    }
  }

  render(){
    if(!this.state.date){
      return(<div></div>);
    }
    return(
      <div className="review-form">
        <h3>Write a Review</h3>
        <div>Restaurant Index Item</div>
      <div className="review-input">
        <label>Your Review</label>
        <div className='review-rating'>

        <ul >
          <li>
            <button value={1} className={ ((this.state.rating >= 1 ) ? "highlight " : "" ) + "small-square-button"} onClick={this.updateRating(1).bind(this)}>
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={2} className={ ((this.state.rating >= 2 ) ? "highlight " : "" ) + "small-square-button"} onClick={this.updateRating(2).bind(this)}>
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={3} className={ ((this.state.rating >= 3 ) ? "highlight " : "" ) + "small-square-button"} onClick={this.updateRating(3).bind(this)}>
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={4} className={ ((this.state.rating >= 4 ) ? "highlight " : "" ) + "small-square-button"} onClick={this.updateRating(4).bind(this)}>
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

          <li>
            <button value={5} className={ ((this.state.rating >= 5 ) ? "highlight " : "" ) + "small-square-button"} onClick={this.updateRating(5).bind(this)}>
              <img src={window.images.star_icon} className="star-icon" />
            </button>
          </li>

        </ul>
        <span>Select your rating</span>
      </div>
        <textarea value={this.state.body || ""} onChange={this.update('body').bind(this)} />
      </div>
      <button onClick={this.handleSubmit().bind(this)}><span>Post Review</span></button>
    </div>
    );
  }
}

export default ReviewForm;
